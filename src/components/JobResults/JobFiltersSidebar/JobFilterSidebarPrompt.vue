<template>
  <div class="flex flex-row justify-between">
    <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
    <div class="flex items-center text-sm">
      <action-button
        text="Clear Filters"
        type="secondary"
        class="rounded"
        data-test="clear-user-job-filters"
        @click="clearUserJobSelectionFilter"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CLEAR_USER_JOB_FILTER_SELECTIONS } from "@/store/constants";
import { useStore } from "vuex";
import { key } from "@/store";

const store = useStore(key);
const clearUserJobSelectionFilter = () => {
  store.commit(CLEAR_USER_JOB_FILTER_SELECTIONS);
};
</script>

<script lang="ts">
import ActionButton from "@/components/shared/ActionButton.vue";
export default {
  name: "JobFilterSidebarPrompt",
  components: { ActionButton },
};
</script>
