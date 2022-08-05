<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <!-- // whenever passing props anything else then string then use v-bind syntax. -->
      <!-- we have to pass two props to this component first is fas(in our case) second is icon name -->
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span>
          <span class="text-brand-green-1">{{ FILTERED_JOBS.length }}</span>
          jobs matched</span
        >
      </div>
    </div>
  </div>
</template>
<script setup>
// import { useRoute } from "vue-router";
// import { computed } from "vue";
// import { useStore } from "vuex";
import useConfirmRoute from "@/composables/useConfirmRoute";
import { useFilteredJobs } from "@/store/composables";

// const route = useRoute();
// const onJobResultsPage = computed(() => route.name === "JobResults");
const onJobResultsPage = useConfirmRoute("JobResults");
const FILTERED_JOBS = useFilteredJobs();
// const store = useStore();
// const FILTERED_JOBS = computed(() => store.getters.FILTERED_JOBS);
</script>
<script>
// import { mapGetters } from "vuex";
// import { FILTERED_JOBS } from "@/store/constants";
export default {
  name: "SubNav",
  // computed: {
  //   ...mapGetters([FILTERED_JOBS]),
  //   onJobResultsPage() {
  //     return this.$route.name === "JobResults";
  //   },
  // },
};
</script>
