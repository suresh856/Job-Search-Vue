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
