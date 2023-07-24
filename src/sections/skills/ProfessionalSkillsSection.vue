<template>
  <section class="flex flex-wrap mt-0 sm:mt-12">
    <div
      v-for="skill in skills"
      :key="skill.message"
      class="w-full p-4 xl:w-1/4 md:w-1/2">
      <div
        class="flex flex-col flex-1 rounded-lg sal-animate skillz"
        data-aos="fade-up"
        data-aos-duration="2000">
        <div class="relative flex flex-col items-center justify-center h-full p-6 overflow-hidden text-center border-2 rounded-lg border-primary hover:scale-105">
          <div>
            <img
              :src="`imgs/technos/${skill.img}`"
              :alt="skill.message"
              class="inline-block h-20 color-bg-gray-700 hover:skew-y-6">
          </div>
          <div class="w-12 h-1 mt-2 mb-4 rounded bg-primary" />
          <div>
            <h5 class="text-xl skill-name">{{ skill.message }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import skills from "./data.json";
export default {
    name: "ProfessionalSkills",
    data() {
        return {
            skills: skills
        };
    }
};

</script>
