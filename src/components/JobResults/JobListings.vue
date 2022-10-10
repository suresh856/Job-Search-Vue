<template>
  <main class="bg-brand-gray-2 flex-auto p-8 w-4/5">
    <div v-if="displayedJobs.length === 0">
      <div class="self-center">
        <span v-pre class="text-center font-semibold text-xl text-black"
          >No Jobs Found. Please clear filter and try again.
        </span>
      </div>
    </div>
    <div v-else>
      <ol class="max-w-max mx-auto">
        <job-listing
          v-for="job in displayedJobs"
          :key="job.id"
          :job="job"
          data-test="job-listing"
        />
      </ol>
      <div class="mt-8 mx-auto">
        <div class="flex flex-row flex-nowrap">
          <p class="text-sm flex-grow">Page {{ currentPage }}</p>
          <div class="flex items-center justify-center">
            <router-link
              v-if="previousPage"
              :to="{ name: 'JobResults', query: { page: previousPage } }"
              class="mx-3 text-sm font-semibold text-brand-blue-2"
              data-test="previous-page-link"
              >Previous</router-link
            >
            <router-link
              v-if="nextPage"
              :to="{ name: 'JobResults', query: { page: nextPage } }"
              class="mx-3 text-sm font-semibold text-brand-blue-2"
              data-test="next-page-link"
              >Next</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { computed, onMounted, defineExpose } from "vue";
import {
  useFilteredJobs,
  useFetchJobsDispatch,
  useFetchDegreesDispatch,
} from "@/store/composables";
import useCurrentPage from "@/composables/useCurrentPage";
import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";

onMounted(useFetchJobsDispatch);
onMounted(useFetchDegreesDispatch);
const filteredJobs = useFilteredJobs();

const currentPage = useCurrentPage();
const maxPage = computed(() => Math.ceil(filteredJobs.value.length / 10));
const { previousPage, nextPage } = usePreviousAndNextPages(
  currentPage,
  maxPage
);

const displayedJobs = computed(() => {
  const pageNumber = currentPage.value;
  const firstJobIndex = (pageNumber - 1) * 10;
  const lastJobIndex = firstJobIndex + 10;
  return filteredJobs.value.slice(firstJobIndex, lastJobIndex);
});

defineExpose({ currentPage, previousPage, nextPage, displayedJobs });
</script>
<script lang="ts">
import JobListing from "@/components/JobResults/JobListing.vue";
export default {
  name: "JobListings",
  components: { JobListing },
};
</script>
