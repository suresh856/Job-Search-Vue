<template>
  <main class="flex flex-col h-screen">
    <section class="flex flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <head-line />
          <job-search-form />
        </div>
        <div class="col-start-7 col-span-5">
          <head-line-image />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>

    <spot-light class="flex flex-row justify-center pb-16">
      <template #default="{ img, title, description }">
        <router-link
          to="/jobs/results"
          class="flex flex-col mx-5 border rounded-lg w-72 bg-brand-gray-2 h-96"
        >
          <img :src="img" class="object-contain" />

          <div class="h-48 px-6 py-4 mt-3">
            <h3 class="text-lg font-medium">
              {{ title }}
            </h3>

            <p class="mt-3 text-sm">
              {{ description }}
            </p>
          </div>

          <router-link
            to="/jobs/results"
            class="px-6 pb-4 text-sm text-brand-blue-1"
            >See jobs</router-link
          >
        </router-link>
      </template>
    </spot-light>
  </main>
</template>
<script lang="ts">
import HeadLine from "@/components/jobSearch/HeadLine.vue";
import JobSearchForm from "@/components/jobSearch/JobSearchForm.vue";
import HeadLineImage from "@/components/jobSearch/HeadLineImage.vue";
import SpotLight from "./SpotLight.vue";
export default {
  name: "Hero",
  components: {
    HeadLine,
    JobSearchForm,
    HeadLineImage,
    SpotLight,
  },
  // BASIC LIFE CYCLE HOOKS IN VUE TO USE
  // beforeCreate() {
  //   console.log("Component is about to be created");
  // },
  // created() {
  //   console.log("Component has been created");
  // },
  // beforeMount() {
  //   console.log("Component is about to be mounted");
  // },
  // mounted() {
  //   console.log("Component has been mounted in the DOM");
  // },
  // beforeUpdate() {
  //   console.log("before any update");
  // },
  // updated() {
  //   console.log("after updated");
  // },
};
</script>
