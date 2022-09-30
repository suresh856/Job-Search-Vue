<template>
  <accordion header="Degree">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="degree in uniqueDegrees" :key="degree" class="w-1/2 h-8">
            <input
              :id="degree"
              v-model="selectedDegrees"
              :value="degree"
              type="checkbox"
              class="mr-3"
              :data-test="degree"
              @change="selectDegrees"
            />
            <label :for="degree" data-test="degrees">{{ degree }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { key } from "@/store";
import { useUniqueDegrees, useFetchDegreesDispatch } from "@/store/composables";
import { ADD_SELECTED_DEGREES } from "@/store/constants";

onMounted(useFetchDegreesDispatch);
const router = useRouter();
const store = useStore(key);
const selectedDegrees = ref([]);

const uniqueDegrees = useUniqueDegrees();

const selectDegrees = () => {
  store.commit(ADD_SELECTED_DEGREES, selectedDegrees.value);
  router.push({ name: "JobResults" });
};
</script>
<script lang="ts">
import Accordion from "@/components/shared/Accordion.vue";
export default {
  name: "JobFilterSidebarDegrees",
  components: {
    Accordion,
  },
};
</script>
