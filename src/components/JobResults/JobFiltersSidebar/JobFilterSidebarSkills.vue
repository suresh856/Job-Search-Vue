<template>
  <div class="mt-5">
    <input
      v-model.lazy.trim="skillsSearchTerm"
      class="p-3 h-12 border border-solid border-brand-gray-1 shadow-gray rounded w-full text-base"
      placeholder="Computer programming, Finance degree"
      data-test="skills-search-input"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { key } from "@/store";
import { UPDATE_SKILLS_SEARCH_TERM } from "@/store/constants";

const store = useStore(key);
const skillsSearchTerm = computed({
  get() {
    return store.state.skillsSearchTerm;
  },
  set(value) {
    store.commit(UPDATE_SKILLS_SEARCH_TERM, value);
  },
});
</script>

<script lang="ts">
export default {
  name: "JobFilterSidebarSkills",
};
</script>
