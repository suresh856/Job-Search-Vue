<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>
    <!-- v-slot:subtitle is same as #subtitle -->
    <template #subtitle>
      <h2 class="w-full my-4 text-base font-light">
        It's awesome here. Why don't you come join us?
      </h2>
    </template>
  </header-container>
</template>

<script lang="ts">
import HeaderContainer from "@/components/shared/HeaderContainer.vue";
export default {
  name: "TeamsView",
  components: { HeaderContainer },
};
</script>
