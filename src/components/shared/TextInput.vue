<template>
  <input
    class="w-full text-lg font-normal focus:outline-none"
    :placeholder="placeholder"
    type="text"
    :value="modelValue"
    @input="handleInput"
  />
</template>
<script>
export default {
  name: "TextInput",
  props: {
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
  },
  emits: { "update:modelValue": null }, //this can be array also instead of object.
  methods: {
    handleInput($event) {
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>
