<template>
  <div class="text-4xl text-center font-medium bold title"> {{ firstText }} <span class="text-primary">{{ secondText }}</span></div>
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