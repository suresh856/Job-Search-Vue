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
      <!-- <job-filter-sidebar-organizations />
      <job-filter-sidebar-job-types /> -->
      <!-- both above used before checkbox vue component check them for some vue concepts -->
      <job-filter-sidebar-checkbox-group
        header="Job type"
        :unique-values="uniqueJobTypes"
        :mutation="ADD_SELECTED_JOB_TYPES"
      />
      <job-filter-sidebar-checkbox-group
        header="Organization"
        :unique-values="uniqueOrganizations"
        :mutation="ADD_SELECTED_ORGANIZATIONS"
      />
    </section>
  </div>
</template>
<script>
import ActionButton from "@/components/shared/ActionButton.vue";
import JobFilterSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarCheckboxGroup.vue";

import { useUniqueJobTypes, useUniqueOrganizations } from "@/store/composables";
import {
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_ORGANIZATIONS,
} from "@/store/constants";

export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    JobFilterSidebarCheckboxGroup,
  },
  //setup() method is like script setup
  setup() {
    const uniqueJobTypes = useUniqueJobTypes();
    const uniqueOrganizations = useUniqueOrganizations();
    return {
      uniqueJobTypes,
      uniqueOrganizations,
      ADD_SELECTED_JOB_TYPES,
      ADD_SELECTED_ORGANIZATIONS,
    };
  },
};
</script>
