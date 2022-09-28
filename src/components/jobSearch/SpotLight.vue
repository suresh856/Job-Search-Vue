<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

const spotlights = ref<Spotlight[]>([]);

const getSpotlights = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const endpoint = `${baseUrl}/spotlights`;
  const response = await axios.get<Spotlight[]>(endpoint);
  spotlights.value = response.data;
};

onMounted(getSpotlights);
</script>
<script lang="ts">
interface Spotlight {
  id: number;
  img: string;
  title: string;
  description: string;
}
export default {
  name: "SpotLight",
};
</script>
