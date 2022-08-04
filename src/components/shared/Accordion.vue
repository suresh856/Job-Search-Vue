<template>
  <div class="py-5 border-b border-solid border-brand-gray-2">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      data-test="clickable-area"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <div v-if="isOpen" class="w-full mt-5">
      <slot>
        <!-- write fallback html here -->
        <p>
          this is fallback content. This is only used when parent does not
          provide any slot content.
        </p>
      </slot>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, defineProps } from "vue";

//props
defineProps({
  header: {
    type: String,
    required: true,
  },
});

//Reactivity
const isOpen = ref(false);

//computed
const caretIcon = computed(() => {
  return isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"];
});

//methods
const open = () => {
  isOpen.value = !isOpen.value;
};
</script>
<script>
export default {
  name: "Accordion",
  //below is optional API code in setup script we have Composition API
  // props: {
  //   header: {
  //     type: String,
  //     required: true,
  //   },
  // },
  // data() {
  //   return {
  //     isOpen: false,
  //   };
  // },
  // computed: {
  //   caretIcon() {
  //     return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
  //   },
  // },

  // methods: {
  //   open() {
  //     this.isOpen = !this.isOpen;
  //   },
  // },
};
</script>
