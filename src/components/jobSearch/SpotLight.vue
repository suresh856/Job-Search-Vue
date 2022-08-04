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
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const spotlights = ref([]);

const getSpotlights = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const endpoint = `${baseUrl}/spotlights`;
  const response = await axios.get(endpoint);
  spotlights.value = response.data;
};

onMounted(getSpotlights);
</script>
<script>
export default {
  name: "SpotLight",
  //this is option api code above one is composition api
  // data() {
  //   return {
  //     spotlights: [],
  //   };
  // },
  // async mounted() {
  //   const baseUrl = process.env.VUE_APP_API_URL;
  //   const endpoint = `${baseUrl}/spotlights`;
  //   const response = await axios.get(endpoint);
  //   this.spotlights = response.data;
  // },
};
</script>
