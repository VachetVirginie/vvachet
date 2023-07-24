<template>
  <div>
    <section id="features">
      <div class="divide-y divide-primary">
        <div class="container mx-auto">
          <div class="items-center justify-between sm:flex">
            <div class="w-full p-4 xl:w-1/2 md:w-1/2">
              <img
                alt="Ngtv Project"
                class="skew-y-6 rounded-lg lazyloaded"
                data-aos="fade-right"
                data-aos-duration="2000"
                :src="require('../../../public/imgs/portfolio/ng.webp')">
              <DotSvg
                class="-mt-10 -ml-10" />
            </div>
            <div
              class="w-full mt-2 ml-2 sm:w-1/2"
              data-aos="fade-left"
              data-aos-duration="2000">
              <div class="justify-between px-4 py-24 sm:flex-col">
                <h4 class="py-4 font-medium uppercase text-primary sm:font-semibold">
                  {{ infos._NGTV.titre }}
                </h4> <h2 class="py-4 text-2xl font-semibold sm:text-xl lg:text-3xl light-text-gray-700 slogan">
                  {{ infos._NGTV.slogan }}
                </h2>
                <div class="flex flex-wrap items-center justify-around p-2 mt-5 mb-5 leading-none md:p-2">
                  <MainChips
                    v-for="techno in infos._NGTV.technos"
                    :key="techno"
                    :msg="techno" />
                </div>
                <p class="py-4 mb-2 light-text-gray-700 text-lg">
                  {{ infos._NGTV.description_0_part_1 }}
                  <span class="font-bold underline-effect">
                    {{ infos._NGTV.description_0_part_2 }}
                  </span>.
                </p>
                <p class="py-4 mb-2 light-text-gray-700 text-lg">
                  {{ infos._NGTV.description_2 }}
                </p>
                <p
                  v-for="mission in infos._NGTV.missions"
                  :key="mission"
                  class="mb-2 text-lg light-text-gray-700">
                  {{ mission }}
                </p>
                <a
                  href="https://www.ngtvexperience.com/"
                  class="flex px-10 py-3 text-xl sm:w-2/3 lg:w-1/2 text-primary">{{ infos._Commons.goto }}
                  <siteArrow />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto">
          <div class="items-center justify-between sm:flex">
            <div class="w-full p-4 xl:w-1/2 md:w-1/2">
              <img
                alt="Cegedim srh"
                class="skew-y-6 rounded-lg lazyloaded"
                data-aos="fade-right"
                data-aos-duration="2000"
                :src="require('../../../public/imgs/portfolio/srh.webp')">
              <DotSvg class="-mt-10 -ml-10" />
            </div>
            <div
              class="w-full ml-2 sm:w-1/2"
              data-aos="fade-left"
              data-aos-duration="2000">
              <div class="justify-between px-4 py-24 sm:flex-col">
                <h4 class="py-4 font-medium uppercase text-primary sm:font-semibold">
                  {{ infos._Cegedim.titre }}
                </h4> <h2 class="py-4 text-2xl font-semibold sm:text-xl lg:text-5xl light-text-gray-700 slogan">
                  {{ infos._Cegedim.slogan }}
                </h2>
                <div class="flex flex-wrap items-center justify-around p-2 mt-5 mb-5 leading-none md:p-4">
                  <MainChips
                    v-for="techno in infos._Cegedim.technos"
                    :key="techno"
                    :msg="techno" />
                </div>
                <p class="py-4 mb-2 text-lg light-text-gray-700">
                  {{ infos._Cegedim.description_0_part_1 }} <span class="font-bold underline-effect"> {{ infos._Cegedim.description_0_part_2 }}</span>.
                </p>
                <p class="py-4 mb-2 text-lg light-text-gray-700">
                  {{ infos._Cegedim.description_1 }}
                </p>
                <p
                  v-for="mission in infos._Cegedim.missions"
                  :key="mission"
                  class="mb-2 text-lg light-text-gray-700">
                  {{ mission }}
                </p>
                <a
                  href="https://www.cegedim-srh.com/Pages/Accueil.aspx"
                  class="flex px-10 py-3 text-xl sm:w-2/3 lg:w-1/2 text-primary">{{ infos._Commons.goto }}
                  <siteArrow />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto">
          <div class="items-center justify-between sm:flex">
            <div class="w-full p-4 xl:w-1/2 md:w-1/2">
              <img
                alt="Orange logo"
                class="skew-y-6 rounded-lg lazyloaded"
                data-aos="fade-right"
                data-aos-duration="2000"
                :src="require('../../../public/imgs/portfolio/Orange-logo.jpg')">
              <DotSvg class="-mt-10 -ml-10" />
            </div>
            <div
              class="w-full ml-2 sm:w-1/2"
              data-aos="fade-left"
              data-aos-duration="2000">
              <div class="justify-between px-4 py-24 sm:flex-col">
                <h4 class="py-4 font-medium uppercase text-primary sm:font-semibold">
                  {{ infos._Orange.titre }}
                </h4>
                <h2 class="py-4 text-2xl font-semibold sm:text-xl lg:text-5xl light-text-gray-700 slogan">
                  {{ infos._Orange.slogan }}
                </h2>
                <div class="flex flex-wrap items-center justify-around p-2 mt-5 mb-5 leading-none md:p-4">
                  <MainChips
                    v-for="techno in infos._Orange.technos"
                    :key="techno"
                    :msg="techno" />
                </div>
                <p class="py-4 mb-2 text-lg light-text-gray-700">
                  {{ infos._Orange.description_0_part_1 }} <span class="font-bold underline-effect"> {{ infos._Orange.description_0_part_2 }}</span>  {{ infos._Orange.description_0_part_3 }}
                </p>
                <p
                  v-for="mission in infos._Cegedim.missions"
                  :key="mission"
                  class="mb-2 text-lg light-text-gray-700">
                  {{ mission }}
                </p>
                <a
                  href="https://www.orange.com/fr"
                  class="flex px-10 py-3 text-xl sm:w-2/3 lg:w-1/2 text-primary">{{ infos._Commons.goto }}
                  <siteArrow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MainChips from "../../components/commons/MainChips.vue";
import DotSvg from "./assets/dotsSvg.vue";
import siteArrow from "./assets/siteArrow.vue";
import infos from "./data.json";

export default {
    name: "Portfolio",
    components: {
        MainChips,
        DotSvg,
        siteArrow
    },
    props: {
        msg:{
            type: String,
            required: true
        }
    },
    data() {
        return {
            infos: infos
        };
    }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.work {
    font-family: 'Roboto', sans-serif;
}
.slogan {
  font-family: 'Poppins', sans-serif;
}
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, .25);
}
</style>
