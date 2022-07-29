<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">WHat do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button
            text="Clear Filters"
            type="secondary"
            class="rounded"
          />
        </div>
      </div>
      <job-filter-sidebar-organizations />
      <job-filter-sidebar-job-types />
    </section>
  </div>
</template>
<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import JobFilterSidebarOrganizations from "./JobFilterSidebarOrganizations.vue";
import JobFilterSidebarJobTypes from "./JobFilterSidebarJobTypes.vue";
export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    JobFilterSidebarOrganizations,
    JobFilterSidebarJobTypes,
  },
};
</script>
