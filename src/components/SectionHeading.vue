<script setup>
defineProps({
  eyebrow: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  headingId: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <header class="section-heading">
    <p class="eyebrow">
      {{ eyebrow }}
    </p>
    <h2 :id="headingId">
      {{ title }}
    </h2>
    <slot />
  </header>
</template>
