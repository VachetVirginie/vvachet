<template>
  <section class="mb-16">
    <Title
      class="mt-12 mb-12"
      firstText="About"
      secondText="Me" />

    <aside>
      <div class="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div
            data-aos="zoom-in"
            class="p-8 text-center text-white bg-indigo-600 rounded-md sm:col-span-2 sm:p-16 lg:py-24">
            <div class="max-w-lg mx-auto space-y-8">
              <div class="relative w-24 h-24 mx-auto mb-4 -my-12 overflow-hidden border-4 border-indigo-600 rounded-full shadow">
                <img
                  class="object-cover w-full h-full"
                  src="https://avatars.githubusercontent.com/u/26382911?s=96&v=4">
              </div>
              <p class="font-bold">
                Développeuse fullstack, passionnée par le monde du web depuis des années j'ai eu la chance à travers une formation chez Simplon d'entamer une reconversion professionnelle, complétée par un contrat de professionnalisation au sein de l'entreprise Orange
                et ainsi pouvoir exercer le métier qui me passionne.
                Par la suite, j'ai travaillé chez cegedim durant un an et suis actuellement en poste chez Ngtv Experience depuis octobre 2019.
              </p>
              <blockquote>
                <p> Codez toujours comme si la personne qui allait maintenir votre code était un violent psychopathe qui sait où vous habitez.</p>
                <small> ― John Woods.</small>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </section>
</template>

<script>
import Title from "./Title.vue";
export default {
    name: "Personnal",
    components: {
        Title
    },
    beforeCreate() {
        let twitterFeed = document.createElement("script");
        twitterFeed.setAttribute("src", "https://platform.twitter.com/widgets.js");
        document.head.appendChild(twitterFeed);
    }
};
</script>