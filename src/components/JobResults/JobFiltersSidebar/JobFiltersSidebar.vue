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
      <job-filter-sidebar-checkbox-group
        header="Degree"
        :unique-values="uniqueDegrees"
        :mutation="ADD_SELECTED_DEGREES"
      />
      <!-- same below code can be done using above reusable component -->
      <!-- <JobFilterSidebarDegreesVue /> -->
    </section>
  </div>
</template>
<script lang="ts">
import ActionButton from "@/components/shared/ActionButton.vue";
import JobFilterSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarCheckboxGroup.vue";
// import JobFilterSidebarDegreesVue from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarDegrees.vue";
import { defineComponent } from "vue";
import {
  useUniqueJobTypes,
  useUniqueOrganizations,
  useUniqueDegrees,
} from "@/store/composables";
import {
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_DEGREES,
} from "@/store/constants";

export default defineComponent({
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    JobFilterSidebarCheckboxGroup,
    // JobFilterSidebarDegreesVue,
  },
  //setup() method is like script setup
  setup() {
    const uniqueJobTypes = useUniqueJobTypes();
    const uniqueOrganizations = useUniqueOrganizations();
    const uniqueDegrees = useUniqueDegrees();
    return {
      uniqueJobTypes,
      uniqueOrganizations,
      uniqueDegrees,
      ADD_SELECTED_JOB_TYPES,
      ADD_SELECTED_ORGANIZATIONS,
      ADD_SELECTED_DEGREES,
    };
  },
});
</script>
