<template>
  <job-filter-sidebar-checkbox-group
    :unique-values="uniqueOrganizations"
    :mutation="ADD_SELECTED_ORGANIZATIONS"
    data-test="organization-filter"
  />
</template>
<script setup lang="ts">
import { useUniqueOrganizations } from "@/store/composables";
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";
const uniqueOrganizations = useUniqueOrganizations();
</script>
<script lang="ts">
import JobFilterSidebarCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";
export default {
  name: "JobFilterSidebarOrganizations",
  components: { JobFilterSidebarCheckboxGroup },
};
</script>
