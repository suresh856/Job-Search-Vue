<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>
<script setup lang="ts">
import { computed, defineProps } from "vue";
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: "primary",
    validator(value: string) {
      // this method must return boolean value only
      return ["primary", "secondary"].includes(value);
    },
  },
});
const buttonClass = computed(() => {
  return { [props.type]: true };
});
</script>
<script lang="ts">
export default {
  name: "ActionButton",
  // we can pass props in kebab case and use in pascal case here. Vue takes care of it.We can use kebab case here as well. it will work fine.
  // props: ["text","type"];
  // props: {
  //   text: {
  //     type: String,
  //     required: true,
  //   },
  //   type: {
  //     type: String,
  //     required: false,
  //     default: "primary",
  //     validator(value) {
  //       // this method must return boolean value only
  //       return ["primary", "secondary"].includes(value);
  //     },
  //   },
  // },
  // data() {
  //   return {
  //     primary: this.isPrimary,
  //   };
  // },
  // computed: {
  //   buttonClass() {
  //     return {
  //       // primary: this.type === "primary",
  //       // secondary: this.type === "secondary",
  //       [this.type]: true,
  //     };
  //   },
  // },
};
</script>

<style scoped>
button {
  @apply px-5 py-3  font-medium border-0;
}
.primary {
  @apply rounded text-white bg-brand-blue-1 hover:shadow-blue;
}
.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
