<template>
  <div>
    <form
      class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
      @submit.prevent="searchForJobs"
    >
      <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
      <div class="flex flex-nowrap flex-1 h-full text-base font-light">
        <div class="relative flex items-center flex-1 h-full pr-3">
          <label class="absolute left-0 -top-10">Role</label>
          <text-input
            v-model="role"
            data-test="role-input"
            placeholder="Software engineer"
          />
        </div>
        <span
          class="flex items-center h-full px-3 border-l border-r border-brand-gray-3 bg-brand-gray-2"
          >in</span
        >
        <div class="relative flex items-center flex-1 h-full pl-3">
          <label class="absolute left-0 -top-10">Where?</label>
          <text-input
            v-model="location"
            data-test="location-input"
            placeholder="Bangalore"
          />
        </div>
      </div>
      <action-button
        text="search"
        data-test="form-submit-button"
        type="secondary"
        class="rounded-r-3xl"
      />
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const role = ref("");
const location = ref("");
const router = useRouter();
function searchForJobs() {
  router.push({
    name: "JobResults",
    query: { role: role.value, location: location.value },
  });
}
</script>
<script lang="ts">
import ActionButton from "@/components/shared/ActionButton.vue";
import TextInput from "@/components/shared/TextInput.vue";
export default {
  name: "JobSerachForm",
  components: {
    ActionButton,
    TextInput,
  },
  // optional API code in setup composition API is used
  // data() {
  //   return {
  //     role: "",
  //     location: "",
  //   };
  // },
  // methods: {
  //   searchForJobs() {
  //     this.$router.push({
  //       name: "JobResults",
  //       query: { role: this.role, location: this.location },
  //     });
  //   },
  // },
};
</script>
