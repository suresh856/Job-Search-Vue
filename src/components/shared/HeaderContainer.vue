<template>
  <div class="w-full border-b border-solid border-brand-gray-1">
    <div class="mx-auto my-16 text-center">
      <!-- we can have only one slot without name as vue gives default as name to it -->
      <!-- but if have more than one slot then there is issue  -->
      <slot name="title">Sample Title</slot>
      <slot name="subtitle">Sample subtitle</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderContainer",
};
</script>
