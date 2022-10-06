<template>
  <div class="w-full border-b border-solid border-brand-gray-1">
    <div class="self-center h-1/5">
      <div class="text-center">
        <router-link to="/" class="font-bold text-2xl text-brand-blue-1"
          >Go to home</router-link
        >
      </div>
    </div>
    <img :src="imageUrl" class="w-auto h-auto" />
  </div>
</template>
<script setup lang="ts">
const imageUrl = new URL("@/assets/images/NotFound.jpg", import.meta.url).href;
</script>
<script lang="ts">
export default {
  name: "NotFound",
};
</script>
