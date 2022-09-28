<template>
  <accordion :header="header">
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
  </accordion>
</template>
<!-- similar code with optional API is in JobFilterSidebarOrganizations -->
<script setup lang="ts">
import { ref, defineProps, PropType } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { key } from "@/store/index";
var props = defineProps({
  header: {
    type: String,
    required: true,
  },
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

const selectValue = () => {
  store.commit(props.mutation, selectedValues.value);
  router.push({ name: "JobResults" });
};
</script>
<script lang="ts">
import Accordion from "@/components/shared/Accordion.vue";
export default {
  name: "JobFilterSidebarCheckboxGroup",
  components: {
    Accordion,
  },
};
</script>
