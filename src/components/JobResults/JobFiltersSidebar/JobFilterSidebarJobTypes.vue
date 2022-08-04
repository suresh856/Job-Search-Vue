<template>
  <accordion header="JobTypes">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="jobType in uniqueJobTypes"
            :key="jobType"
            class="w-1/2 h-8"
          >
            <input
              :id="jobType"
              v-model="selectedJobTypes"
              :value="jobType"
              type="checkbox"
              class="mr-3"
              :data-test="jobType"
              @change="selectjobType"
            />
            <label :for="jobType" data-test="jobTypes">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { useUniqueJobTypes } from "@/store/composables.js";
import { ADD_SELECTED_JOB_TYPES } from "@/store/constants.js";

const router = useRouter();
const store = useStore();
const selectedJobTypes = ref([]);

const uniqueJobTypes = useUniqueJobTypes();

const selectjobType = () => {
  store.commit(ADD_SELECTED_JOB_TYPES, selectedJobTypes.value);
  router.push({ name: "JobResults" });
};
</script>
<script>
import Accordion from "@/components/shared/Accordion.vue";
export default {
  name: "JobFilterSidebarJobTypes",
  components: {
    Accordion,
  },
};
</script>
