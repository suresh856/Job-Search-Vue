<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20 bg-slate-300">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <head-line />
        </div>
        <div class="col-start-7 col-span-5"></div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>
<script>
import HeadLine from "@/components/HeadLine.vue";
export default {
  name: "Hero",
  components: {
    HeadLine,
  },
  // BASIC LIFE CYCLE HOOKS IN VUE TO USE
  // beforeCreate() {
  //   console.log("Component is about to be created");
  // },
  // created() {
  //   console.log("Component has been created");
  // },
  // beforeMount() {
  //   console.log("Component is about to be mounted");
  // },
  // mounted() {
  //   console.log("Component has been mounted in the DOM");
  // },
  // beforeUpdate() {
  //   console.log("before any update");
  // },
  // updated() {
  //   console.log("after updated");
  // },
};
</script>
