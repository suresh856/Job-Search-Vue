<template>
  <accordion header="JobTypes">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="jobType in UNIQUE_JOB_TYPES"
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

<script>
import { mapGetters, mapMutations } from "vuex";
import { UNIQUE_JOB_TYPES, ADD_SELECTED_JOB_TYPES } from "@/store/constants";
import Accordion from "@/components/shared/Accordion.vue";
export default {
  name: "JobFilterSidebarJobTypes",
  components: {
    Accordion,
  },
  data() {
    return {
      selectedJobTypes: [],
    };
  },
  computed: {
    // UNIQUE_ORGANIZATIONS() {
    //   return this.$store.getters.UNIQUE_ORGANIZATIONS;
    // },
    //below line will work as above exactly
    ...mapGetters([UNIQUE_JOB_TYPES]),
  },
  methods: {
    ...mapMutations([ADD_SELECTED_JOB_TYPES]),
    selectjobType() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes); //first argument this will always be state so we pass only selectedOrganizations and it will be second argument
      this.$router.push({ name: "JobResults" });
    },
  },
};
</script>
