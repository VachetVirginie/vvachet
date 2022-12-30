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
            data-aos-duration="2000"
            class="text-center text-white rounded-md sm:col-span-2 sm:p-16 lg:py-24">
            <div class="max-w-xl sm:max-w-lg mx-auto space-y-8">
              <div class="relative w-24 h-24 mx-auto mb-4 -my-12 overflow-hidden border-4 rounded-full shadow border-primary">
                <img
                  class="object-cover w-full h-full w-24 h-24"
                  src="https://avatars.githubusercontent.com/u/26382911?s=96&v=4">
              </div>
              <p class="font-bold sm:text-2xl text-lg">
                {{ datas._personnal.about }}
              </p>
              <blockquote class="sm:text-xl text-lg">
                {{ datas._personnal.quote }}
                <small> {{ datas._personnal.author }}</small>
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
import text from "../text/data.json";
export default {
    name: "Personnal",
    components: {
        Title
    },
    data() {
        return {
            datas: text,
        };
    }
};
</script>
