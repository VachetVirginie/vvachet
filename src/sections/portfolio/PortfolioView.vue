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
import PortfolioSection from "./PortfolioSection";
import Title from "../../components/commons/Title.vue";
export default {
    components: {
        Title,
        PortfolioSection
    }
};
</script>
