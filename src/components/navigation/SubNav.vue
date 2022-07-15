<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <!-- // whenever passing props anything else then string then use v-bind syntax. -->
      <!-- we have to pass two props to this component first is fas(in our case) second is icon name -->
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span> <span class="text-brand-green-1">1232</span> jobs matched</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SubNav",
  computed: {
    onJobResultsPage() {
      return this.$route.name === "JobResults";
    },
  },
};
</script>
