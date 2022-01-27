<template>
  <section>
    <div class="text-4xl mb-4 text-center font-medium bold title"> {{ firstText }} <span class="text-primary">{{ secondText }}</span></div>
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