<template>
  <section>
    <div class="mb-4 text-4xl font-medium text-center bold title"> {{ firstText }} <span class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-red-500">{{ secondText }}</span></div>
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
.hero-gradient-heading {
	background-image: linear-gradient(108deg,#b16cea 8%,#ff5e69 40%,#ff8a56 77%,#ffa84b 91%);
}
</style>