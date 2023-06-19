<template>
  <main class="mt-16 about">
    <Title
      class="mb-16"
      firstText="Mon"
      secondText="Parcours" />
    <CareerSection />
  </main>
</template>

<script>
import Title from "../components/commons/Title.vue";
import CareerSection from "../components/sections/CareerSection";

export default {
    name: "ProfessionalCareer",
    components: {
        Title,
        CareerSection,
    },
};
</script>
