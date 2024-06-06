<template>
  <div>
    <section
      v-cloak
      class="max-w-5xl py-10 mx-2 md:mx-auto">
      <div>
        <div class="flex flex-row">
          <div class="flex-col items-center hidden md:flex">
            <div
              class="flex flex-col items-center justify-center w-32 py-5 mr-4 uppercase border rounded bg-primary border-primary"
              data-aos="zoom-in"
              data-aos-duration="6000">
              <div class="text-3xl font-black text-white">{{ datas._about.step_1.label }}</div>
              <div class="text-sm text-white">{{ datas._about.step_1.title }}</div>
            </div>
            <div class="h-full border-l-4 border-transparent">
              <div class="h-full mr-4 border-l-4 border-dashed border-primary" />
            </div>
          </div>
          <div
            class="flex-auto border rounded border-primary"
            data-aos="fade-left"
            data-aos-duration="6000">
            <div class="flex flex-col items-center md:flex-row">
              <div class="flex-auto">
                <div class="pt-3 pl-3 text-sm font-normal uppercase md:hidden"><span class="font-black">{{ datas._about.step_1.subtitle_1 }}</span> {{ datas._about.step_1.subtitle_2 }}</div>
                <div class="p-3 text-3xl font">{{ datas._about.step_1.work_place }}</div>
                <div class="px-3 pb-6 text-lg">{{ datas._about.step_1.work_description }} <span class="font-bold underline-effect">{{ datas._about.step_1.colored_text_description }}</span>.</div>
              </div>
              <div class="w-full p-5 md:w-96">
                <img
                  loading="lazy"
                  src="https://simplon.co/images/logo.svg"
                  alt="step 1"
                  class="object-scale-down bg-white p-3">
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row items-start">
          <div class="border-t-4 border-r-4 border-transparent">
            <div class="w-16 h-16 ml-16 border-b-4 border-l-4 border-dashed rounded-bl-full border-primary" />
          </div>
          <div class="flex-auto border-t-4 border-transparent">
            <div class="h-16 border-b-4 border-dashed border-primary" />
          </div>
          <div class="w-16 h-16 mt-16 mr-16 border-t-4 border-r-4 border-dashed rounded-tr-full border-primary" />
        </div>
        <div class="flex flex-row-reverse">
          <div class="flex-col items-center hidden md:flex">
            <div
              class="flex flex-col items-center justify-center w-32 py-5 ml-4 uppercase border rounded bg-primary border-primary"
              data-aos="zoom-in"
              data-aos-duration="6000">
              <div class="text-3xl text-white">{{ datas._about.step_2.label }}</div>
              <div class="text-sm text-center text-white">{{ datas._about.step_2.title }}</div>
            </div>
            <div class="h-full border-r-4 border-transparent">
              <div class="h-full ml-4 border-l-4 border-dashed border-primary" />
            </div>
          </div>
          <div
            class="flex-auto border rounded border-primary"
            data-aos="fade-right"
            data-aos-duration="6000">
            <div class="flex flex-col items-center md:flex-row">
              <div class="flex-auto">
                <div class="pt-3 pl-3 text-sm font-normal uppercase md:hidden"><span class="font-black">{{ datas._about.step_2.subtitle_1 }}</span> {{ datas._about.step_2.subtitle_2 }}</div>
                <div class="p-3 text-3xl font">{{ datas._about.step_2.work_place }}</div>
                <div class="px-3 pb-6 text-lg">{{ datas._about.step_2.work_description }}<span class="mt-5 font-bold leading-relaxed underline-effect">{{ datas._about.step_2.colored_text_description }}</span>.</div>
              </div>
              <div class="w-full p-5 md:w-96">
                <img
                  loading="lazy"
                  src="https://lescognees.com/wp-content/uploads/Orange-logo.png"
                  alt="Orange logo"
                  class="object-scale-down">
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row-reverse items-start">
          <div class="border-t-4 border-l-4 border-transparent">
            <div class="w-16 h-16 mr-16 border-b-4 border-r-4 border-dashed rounded-br-full border-primary" />
          </div>
          <div class="flex-auto border-t-4 border-transparent">
            <div class="h-16 border-b-4 border-dashed border-primary" />
          </div>
          <div class="w-16 h-16 mt-16 ml-16 border-t-4 border-l-4 border-dashed rounded-tl-full border-primary" />
        </div>
        <div class="flex flex-row">
          <div class="flex-col items-center hidden md:flex">
            <div
              class="flex flex-col items-center justify-center w-32 py-5 mr-4 uppercase border rounded bg-primary border-primary"
              data-aos="zoom-in"
              data-aos-duration="6000">
              <div class="text-3xl text-white">{{ datas._about.step_3.label }}</div>
              <div class="text-sm text-center text-white">{{ datas._about.step_3.title }}</div>
            </div>
            <div class="h-full border-l-4 border-transparent">
              <div class="h-full mr-4 border-l-4 border-dashed border-primary" />
            </div>
          </div>
          <div
            class="flex-auto border rounded border-primary"
            data-aos="fade-left"
            data-aos-duration="6000">
            <div class="flex flex-col items-center md:flex-row">
              <div class="flex-auto">
                <div class="pt-3 pl-3 text-sm font-normal uppercase md:hidden"><span class="font-black">{{ datas._about.step_3.subtitle_1 }}</span>{{ datas._about.step_3.subtitle_2 }}</div>
                <div class="p-3 text-3xl font">{{ datas._about.step_3.work_place }}</div>
                <div class="px-3 pb-6 text-lg">
                  {{ datas._about.step_3.work_description }}
                </div>
              </div>
              <div class="w-full p-5 md:w-96">
                <img
                  loading="lazy"
                  src="https://www.myrhline.com/wp-content/uploads/2017/01/6176_default_big.jpg"
                  alt="logo cegedim srh"
                  class="object-scale-down">
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row items-start">
          <div class="border-t-4 border-r-4 border-transparent">
            <div class="w-16 h-16 ml-16 border-b-4 border-l-4 border-dashed rounded-bl-full border-primary" />
          </div>
          <div class="flex-auto border-t-4 border-transparent">
            <div class="h-16 border-b-4 border-dashed border-primary" />
          </div>
          <div class="w-16 h-16 mt-16 mr-16 border-t-4 border-r-4 border-dashed rounded-tr-full border-primary" />
        </div>
        <div class="flex flex-row-reverse">
          <div class="flex-col items-center hidden md:flex">
            <div
              class="flex flex-col items-center justify-center w-32 py-5 ml-4 uppercase border rounded bg-primary border-primary"
              data-aos="zoom-in"
              data-aos-duration="6000">
              <div class="text-3xl text-white">{{ datas._about.step_4.label }}</div>
              <div class="text-sm text-center text-white">{{ datas._about.step_4.title }}</div>
            </div>
          </div>
          <div
            class="flex-auto border rounded border-primary"
            data-aos="fade-right"
            data-aos-duration="6000">
            <div class="flex flex-col items-center md:flex-row">
              <div class="flex-auto">
                <div class="pt-3 pl-3 text-sm font-normal uppercase md:hidden"><span class="font-black">{{ datas._about.step_4.subtitle_1 }}</span>{{ datas._about.step_4.subtitle_2 }}</div>
                <div class="p-3 text-3xl font">{{ datas._about.step_4.work_place }}</div>
                <div class="px-3 pb-6 text-lg">
                  {{ datas._about.step_4.work_description }} <span class="font-bold underline-effect">{{ datas._about.step_4.colored_text_description }}</span>.
                </div>
              </div>
              <div class="w-full p-5 md:w-96">
                <img
                  loading="lazy"
                  src="https://prosoccer5.fr/wp-content/uploads/2021/11/NGTV-logo.jpg"
                  alt="ngtv logo"
                  class="object-scale-down bg-white">
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-row-reverse items-start"
          data-v-a860d564="">
          <div
            class="border-t-4 border-l-4 border-transparent"
            data-v-a860d564="">
            <div
              class="w-16 h-16 mr-16 border-b-4 border-r-4 border-dashed rounded-br-full border-primary"
              data-v-a860d564="" />
          </div>
          <div
            class="flex-auto border-t-4 border-transparent"
            data-v-a860d564="">
            <div
              class="h-16 border-b-4 border-dashed border-primary"
              data-v-a860d564="" />
          </div><div
            class="w-16 h-16 mt-16 ml-16 border-t-4 border-l-4 border-dashed rounded-tl-full border-primary"
            data-v-a860d564="" />
        </div>
        <div
          class="flex flex-row"
          data-v-a860d564="">
          <div
            class="flex-col items-center hidden md:flex"
            data-v-a860d564="">
            <div
              class="flex flex-col items-center justify-center w-32 py-5 mr-4 uppercase border rounded bg-primary border-primary aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-duration="6000"
              data-v-a860d564="">
              <div
                class="text-3xl text-white"
                data-v-a860d564="">
                Step 5
              </div><div
                class="text-sm text-center text-white"
                data-v-a860d564="">
                CDI
              </div>
            </div>
          </div>
          <div
            class="flex-auto border rounded border-primary aos-init aos-animate"
            data-aos="fade-left"
            data-aos-duration="6000"
            data-v-a860d564="">
            <div
              class="flex flex-col items-center md:flex-row"
              data-v-a860d564="">
              <div
                class="flex-auto"
                data-v-a860d564="">
                <div
                  class="pt-3 pl-3 text-sm font-normal uppercase md:hidden"
                  data-v-a860d564="">
                  <span
                    class="font-black"
                    data-v-a860d564="">Step 5</span>- CDI
                </div><div
                  class="p-3 text-3xl font"
                  data-v-a860d5ma64="">
                  Caisse Nationale de l'Assurance Maladie <span class="text-center">(Conserto)</span>
                </div><div
                  class="px-3 pb-6 text-lg"
                  data-v-a860d564="">
                  J'ai intégré l'équipe de développeurs dédiée au design system de la Caisse Nationale de l'Assurance Maladie en Janvier 2024.
                </div>
              </div>
              <div
                class="w-full p-5 md:w-96"
                data-v-a860d564="">
                <img
                  loading="lazy"
                  src="https://raw.githubusercontent.com/deraw/deraw/0bb37de28d6a749bf10841fe65a4d420d854439b/synapse.png"
                  alt="logo cnam"
                  class="object-scale-down"
                  data-v-a860d564="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import text from "./data.json";

export default {
    name: "About",
    data() {
        return {
            datas: text
        };
    },
    Personnalted () {
        this.aos = AOS;
        this.aos.init({
            duration: 6000,
        });
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
a, a:link {
  color: black;
  text-decoration: none;
  background-position-y: -0%;
  background-image: linear-gradient( white 50%, #6EE7B7 50%);
  transition: background 500ms ease;
}

a:hover {
  background-position-y: 100%;
}

[v-cloak] {
  display: none;
}
</style>
