<template>
  <input
    class="w-full text-lg font-normal focus:outline-none"
    :placeholder="props.placeholder"
    type="text"
    :value="props.modelValue"
    @input="handleInput"
  />
</template>
]
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  placeholder: {
    type: String,
    required: false,
    default: "",
  },
  // to enable v-model directive in parent we have to use same names as vue expects for v-model. so prop name as modelValue and emit event as update:modelValue. After that we can use v-model
  // in parent component otherwise we can use old approach of value prop and emit any event but in parent component we have to use both as well to sent prop and handle event
  //to update value there.
  modelValue: {
    type: String,
    required: true,
  },
});
const updatemodelValueEmit = "update:modelValue";
const emits = defineEmits<{
  (e: typeof updatemodelValueEmit, value: string): void;
}>();

function handleInput($event: Event) {
  const target = $event.target as HTMLInputElement;
  emits(updatemodelValueEmit, target.value);
}
</script>
<script lang="ts">
export default {
  name: "TextInput",
};
</script>
