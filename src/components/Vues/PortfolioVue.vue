<template>
  <main class="work dark:text-white light:text-black">
    <Title
      class="mt-24 mb-20"
      firstText="Projets"
      secondText="Professionnels" />
    <PortfolioSection />
  </main>
</template>
<script>
import PortfolioSection from "../sections/PortfolioSection";
import Title from "../commons/Title.vue";
export default {
    components: {
        Title,
        PortfolioSection
    }
};
</script>
