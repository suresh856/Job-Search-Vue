<template>
  <div class="mt-5">
    <fieldset>
      <ul class="flex flex-row flex-wrap">
        <li v-for="value in uniqueValues" :key="value" class="w-1/2 h-8">
          <input
            :id="value"
            v-model="selectedValues"
            :value="value"
            type="checkbox"
            class="mr-3"
            :data-test="value"
            @change="selectValue"
          />
          <label :for="value" data-test="value">{{ value }}</label>
        </li>
      </ul>
    </fieldset>
  </div>
</template>
<!-- similar code with optional API is in JobFilterSidebarOrganizations -->
<script setup lang="ts">
import { ref, defineProps, PropType } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { key } from "@/store/index";
import { CLEAR_USER_JOB_FILTER_SELECTIONS } from "@/store/constants";
var props = defineProps({
  uniqueValues: {
    type: Set as PropType<Set<string>>,
    required: true,
  },
  mutation: {
    type: String,
    required: true,
  },
});

const router = useRouter();
const store = useStore(key);
const selectedValues = ref<string[]>([]);

store.subscribe((mutation) => {
  if (mutation.type === CLEAR_USER_JOB_FILTER_SELECTIONS) {
    selectedValues.value = [];
  }
});

const selectValue = () => {
  store.commit(props.mutation, selectedValues.value);
  router.push({ name: "JobResults" });
};
</script>
<script lang="ts">
export default {
  name: "JobFilterSidebarCheckboxGroup",
};
</script>
