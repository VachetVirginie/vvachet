<template>
  <div class="mt-16">
    <Title
      class="mb-12"
      firstText="Hard"
      secondText="Skillz" />
    <ProfessionalSkillsSection class="mb-12" />
  </div>
</template>

<script>
import Title from "../commons/Title.vue";
import ProfessionalSkillsSection from "./ProfessionalSkillsSection.vue";

export default {
    name: "Professional",
    components: {
        Title,
        ProfessionalSkillsSection
    },
};
</script>
