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
            class="w-full rounded-full"
            alt="Me"
            :src="require('@/imgs/hero/heroCharacter.svg')"
            home-skill>
        </div>
        <ul
          class="absolute top-0 left-0 w-full h-full rounded-full"
          home-skill>
          <li
            class="hero-img"
            title="ApiPlatform"
            home-skill>
            <img
              loading="lazy"
              :src="require('@/imgs/hero/technologies/webby.svg')"
              alt="api platform logo"
              home-skill>
          </li>
          <li
            class="hero-img"
            title="NuxtJs"
            home-skill>
            <img
              loading="lazy"
              :src="require('@/imgs/hero/technologies/nuxt.svg')"
              alt="nuxt logo"
              home-skill>
          </li>
          <li
            class="hero-img"
            title="Symfony"
            home-skill>
            <img
              loading="lazy"
              :src="require('@/imgs/hero/technologies/symfony.svg')"
              alt="symfony logo"
              home-skill>
          </li>
          <li
            class="hero-img"
            title="Vuejs"
            home-skill>
            <img
              loading="lazy"
              :src="require('@/imgs/hero/technologies/vue.svg')"
              alt="vue logo"
              home-skill>
          </li>
          <li
            class="hero-img"
            title="Docker"
            home-skill>
            <img
              loading="lazy"
              :src="require('@/imgs/technos/docker.svg')"
              alt="docker logo"
              home-skill>
          </li>
          <li
            class="

hero-img"
            title="Tailwind"
            home-skill>
            <img
              class="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl"
              src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png"
              alt="">
            <img
              loading="lazy"
              :src="require('@/imgs/hero/technologies/tailwind.svg')"
              alt="tailwind logo"
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
            datas: text
        };
    },
};
</script>
