<template>
  <section>
    <Title
      class="mb-12 mt-12"
      firstText="About"
      secondText="Me" />
    <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
      <div class="md:w-1/2 md:pr-12 md:py-8 mb-10 md:mb-0 pb-10">
        <iframe
          src="https://open.spotify.com/embed/playlist/3ZLC77Mn9If54Z1kanc95w"
          width="450"
          height="440"
          frameborder="2"
          allowtransparency="true"
          allow="encrypted-media" />
      </div>
      <div class="flex flex-col md:w-1/2 md:pl-12" />
    </div>
  </section>
</template>

<script>
import Title from "./Title.vue";
export default {
    name: "Personnal",
    components: {
        Title,
    },
};
</script>