<template>
  <div>Job page {{ currentJobId }}</div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
const route = useRoute();
const currentJobId = computed(() => route.params.id);
</script>

<script lang="ts">
export default {
  name: "JobView",
};
</script>
