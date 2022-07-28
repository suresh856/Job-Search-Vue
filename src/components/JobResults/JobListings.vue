<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
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
  </main>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { FETCH_JOBS, FILTERED_JOB_BY_ORGANIZATIONS } from "@/store/constants";
import JobListing from "@/components/JobResults/JobListing.vue";
export default {
  name: "JobListings",
  components: { JobListing },
  computed: {
    currentPage() {
      const pageString = this.$route.query.page || "1";
      return Number.parseInt(pageString);
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = Math.ceil(this.FILTERED_JOB_BY_ORGANIZATIONS.length / 10);
      return nextPage <= maxPage ? nextPage : undefined;
    },
    displayedJobs() {
      const pageNumber = this.currentPage;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = firstJobIndex + 10; // pageNumber * 10;
      return this.FILTERED_JOB_BY_ORGANIZATIONS.slice(
        firstJobIndex,
        lastJobIndex
      );
    },
    ...mapGetters([FILTERED_JOB_BY_ORGANIZATIONS]), // this creates FILTERED_JOB_BY_ORGANIZATIONS computed property
  },

  async mounted() {
    // this.$store.dispatch(FETCH_JOBS); // to run actions in vue
    this.FETCH_JOBS();
  },
  methods: {
    ...mapActions([FETCH_JOBS]), // this will create FETCH_JOBS method on our component.
  },
};
</script>
