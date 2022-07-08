<script>
import MainNav from "@/components/MainNav.vue";
export default {
  name: "App",
  components: {
    MainNav: MainNav,
  },
};
</script>
<template>
  <!-- <MainNav /> -->
  <!-- we can use kebab case version of component name we register in script file here. so we can use 'main-nav' here -->
  <main-nav />
</template>
