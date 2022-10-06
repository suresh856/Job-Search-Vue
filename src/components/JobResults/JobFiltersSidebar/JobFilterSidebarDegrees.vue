<template>
  <job-filter-sidebar-checkbox-group
    :unique-values="uniqueDegrees"
    :mutation="ADD_SELECTED_DEGREES"
    data-test="degrees-filter"
  />
</template>
<script setup lang="ts">
import { useUniqueDegrees } from "@/store/composables";
import { ADD_SELECTED_DEGREES } from "@/store/constants";
const uniqueDegrees = useUniqueDegrees();
</script>
<script lang="ts">
import JobFilterSidebarCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";
export default {
  name: "JobFilterSidebarDegrees",
  components: { JobFilterSidebarCheckboxGroup },
};
</script>
