<template>
  <div>
    <div class="flex items-center no-underline text-white">
      <div class="flex justify-center items-center m-1 px-3 py-2 border border-primary rounded-full bg-primary text-base text-gray font-medium">
        <span class="flex-initial max-w-full leading-none text-sm font-normal">{{ msg }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "MainChips",
    props: {
        msg:{
            type: String,
            required: true,
        }
    },
};
</script>
