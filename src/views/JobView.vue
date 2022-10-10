<template>
  <Suspense>
    <job-details />
  </Suspense>
</template>

<script lang="ts">
import JobDetails from "@/components/JobResults/JobDetails.vue";

export default {
  name: "JobView",
  components: { JobDetails },
};
</script>
