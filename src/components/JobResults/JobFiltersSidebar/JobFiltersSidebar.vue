<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <job-filter-sidebar-prompt />
      <accordion header="Skills and Qualification">
        <job-filter-sidebar-skills />
      </accordion>
      <accordion header="Location">
        <job-filter-sidebar-locations />
      </accordion>
      <accordion header="Job Types">
        <job-filter-sidebar-job-types />
      </accordion>
      <accordion header="Organization">
        <job-filter-sidebar-organizations />
      </accordion>
      <accordion header="Degree">
        <job-filter-sidebar-degrees />
      </accordion>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { key } from "@/store";
import {
  UPDATE_SKILLS_SEARCH_TERM,
  UPDATE_LOCATION_SEARCH_TERM,
} from "@/store/constants";
import Accordion from "@/components/shared/Accordion.vue";
import JobFilterSidebarDegrees from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarDegrees.vue";
import JobFilterSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarOrganizations.vue";
import JobFilterSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarJobTypes.vue";
import JobFilterSidebarPrompt from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarPrompt.vue";
import JobFilterSidebarSkills from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarSkills.vue";
import JobFilterSidebarLocations from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarLocations.vue";

export default defineComponent({
  name: "JobFiltersSidebar",
  components: {
    Accordion,
    JobFilterSidebarDegrees,
    JobFilterSidebarOrganizations,
    JobFilterSidebarJobTypes,
    JobFilterSidebarPrompt,
    JobFilterSidebarSkills,
    JobFilterSidebarLocations,
  },
  setup() {
    const parseQueryTerms = () => {
      const route = useRoute();
      const store = useStore(key);
      const role = route.query.role || "";
      const location = route.query.location || "";
      store.commit(UPDATE_SKILLS_SEARCH_TERM, role);
      store.commit(UPDATE_LOCATION_SEARCH_TERM, location);
    };
    onMounted(parseQueryTerms);
  },
});
</script>
