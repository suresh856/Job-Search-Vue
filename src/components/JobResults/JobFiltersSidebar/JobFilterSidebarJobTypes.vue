<template>
  <job-filter-sidebar-checkbox-group
    :unique-values="uniqueJobTypes"
    :mutation="ADD_SELECTED_JOB_TYPES"
    data-test="jobtypes-filter"
  />
</template>
<script setup lang="ts">
import { useUniqueJobTypes } from "@/store/composables";
import { ADD_SELECTED_JOB_TYPES } from "@/store/constants";
const uniqueJobTypes = useUniqueJobTypes();
</script>
<script lang="ts">
import JobFilterSidebarCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";
export default {
  name: "JobFilterSidebarJobTypes",
  components: { JobFilterSidebarCheckboxGroup },
};
</script>
