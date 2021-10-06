<template>
  <div>
    <div class="flex items-center no-underline hover:underline text-black">
      <div class="flex justify-center items-center m-1 px-3 py-2 border border-green-200 rounded-full bg-primary text-base text-white font-medium">
        <div class="flex-initial max-w-full leading-none text-xs font-normal">{{ msg }}</div>
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
            required: true
        }
    },
};
</script>