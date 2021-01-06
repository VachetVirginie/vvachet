<template>
  <section>
    <div class="mb-4 text-4xl font-medium text-center bold title"> {{ firstText }} <span class="text-transparent title-gradient">{{ secondText }}</span></div>
  </section>
</template>

<script>
export default {
    name: "Title",
    props: {
        firstText:{
            type: String,
            required: true
        },
        secondText:{
            type: String,
            required: true
        },
    },
};
</script>

<style>
.title-gradient {
  font-size: 72px;
  background: -webkit-linear-gradient(#60BDAF, #BC2649, #EDFCC2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
