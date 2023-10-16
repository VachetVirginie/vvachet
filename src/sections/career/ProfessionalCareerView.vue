<template>
  <main
    v-cloak
    class="mt-16 about">
    <div>
      <Title
        class="mb-16"
        firstText="Mon"
        secondText="Parcours" />
      <CareerSection />
    </div>
  </main>
</template>

<script>
import Title from "../../components/commons/Title.vue";
import CareerSection from "./CareerSection";

export default {
    name: "ProfessionalCareer",
    components: {
        Title,
        CareerSection,
    },
};
</script>
