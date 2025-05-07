<template>
  <main class="container px-10 mx-auto">
    <section class="grid items-center grid-cols-1 gap-10 pt-24 pb-24 md:grid-cols-2 md:gap-12 lg:gap-20 xl:pt-24 2xl:pt-56">
      <div class="order-1 md:order-1 md:mt-0">
        <div class="relative">
          <h1
            class="text-2xl font-bold text-primary lg:text-3xl xl:text-4xl title-min">
            {{ datas._home.say_hello }} <span class="inline-block pr-4 animate-wiggle">👋</span>
          </h1>
          <h1
            class="text-3xl lg:text-4xl xl:text-5xl">
            {{ datas._home.name }}
          </h1>
          <p
            class="mt-5 leading-relaxed xl:w-3/4 2xl:text-xl text-xl">
            {{ datas._home.title_1 }}
            <span class="underline-effect">{{ datas._home.title_2 }}</span>
            <!--            {{ datas._home.title_3 }}-->
            <!--            <span class="underline-effect">{{ datas._home.title_4 }}</span>-->
            {{ datas._home.title_5 }}
          </p>
        </div>
      </div>
      <div
        class="relative order-2 p-4 border border-2 border-primary  rounded-full border-opacity-50 lg:p-7 xl:p-9">
        <div class="relative p-4 border border-2 rounded-full border-primary border-opacity-50 lg:p-7 xl:p-9">
          <img
            loading="lazy"
            width="300"
            height="300"
            class="w-full rounded-full"
            alt="Me"
            :src="require('@/imgs/hero/heroCharacter.svg')"
            home-skill>
        </div>
        <ul
          class="absolute top-0 left-0 w-full h-full rounded-full"
          home-skill>
          <!-- Utilisation de v-for pour optimiser le DOM et réduire la taille du code -->
          <li
            v-for="(tech, index) in technologies"
            :key="index"
            class="hero-img"
            :title="tech.title"
            :style="tech.style"
            home-skill>
            <img
              loading="lazy"
              width="40"
              height="40"
              :src="tech.src"
              :alt="tech.alt"
              decoding="async"
              fetchpriority="low"
              home-skill>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import text from "./data.json";

export default {
    name: "HeroView",
    data() {
        return {
            datas: text,
            technologies: [{
                title: "ApiPlatform",
                src: require("@/imgs/hero/technologies/webby.svg"),
                alt: "api platform logo",
                style: "top: 0; left: 4rem;"
            }, {
                title: "NuxtJs",
                src: require("@/imgs/hero/technologies/nuxt.svg"),
                alt: "nuxt logo",
                style: "top: 0.5rem; right: 2.5rem;"
            }, {
                title: "Symfony",
                src: require("@/imgs/hero/technologies/symfony.svg"),
                alt: "symfony logo",
                style: "top: 9rem; right: -0.5rem;"
            }, {
                title: "Vuejs",
                src: require("@/imgs/hero/technologies/vue.svg"),
                alt: "vue logo",
                style: "bottom: 0; left: 8rem;"
            }, {
                title: "Docker",
                src: require("@/imgs/technos/docker.svg"),
                alt: "docker logo",
                style: "top: 6rem; left: -0.5rem;"
            }, {
                title: "Tailwind",
                src: require("@/imgs/hero/technologies/tailwind.svg"),
                alt: "tailwind logo",
                style: "bottom: 3.5rem; left: 0.5rem;"
            }]
        };
    },
    // Ajout de méthodes pour optimiser le chargement des images
    mounted() {
        // Préchargement des images critiques
        this.preloadCriticalImages();
    },
    methods: {
        preloadCriticalImages() {
            // Précharger uniquement les images visibles initialement
            const visibleTechs = this.technologies.slice(0, 3);
            visibleTechs.forEach(tech => {
                const img = new Image();
                img.src = tech.src;
            });
        }
    }
};
</script>
