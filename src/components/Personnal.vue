<template>
  <section class="mb-16">
    <Title
      class="mb-12 mt-12"
      firstText="About"
      secondText="Me" />

    <aside>
      <div class="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            data-aos="zoom-in"
            class="p-8 text-center text-white bg-indigo-600 sm:col-span-2 sm:p-16 lg:py-24">
            <div class="max-w-lg mx-auto space-y-8">
              <div class="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4 mb-4">
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

          <div
            data-aos="fade-left"
            class="relative xl:h-64 lg:order-first lg:h-full sm:invisible xl:mb-0 mb-6">
            <a
              class="twitter-timeline"
              data-theme="dark"
              data-height="550"
              href="https://twitter.com/VirginieVachet?ref_src=twsrc%5Etfw">Tweets by VirginieVachet</a>
          </div>

          <div
            class="relative xl:h-64 lg:h-full"
            data-aos="fade-right">
            <iframe
              src="https://open.spotify.com/embed/playlist/3ZLC77Mn9If54Z1kanc95w"
              width="350"
              height="550"
              frameborder="2"
              allowtransparency="true"
              allow="encrypted-media" />
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
        Title,
    },
    created() {
        let twitterFeed = document.createElement("script");
        twitterFeed.setAttribute("src", "https://platform.twitter.com/widgets.js");
        document.head.appendChild(twitterFeed);
    }
};
</script>