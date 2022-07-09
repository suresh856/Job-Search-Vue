<script>
import MainNav from "@/components/MainNav.vue";
import Hero from "@/components/Hero.vue";
export default {
  name: "App",
  components: {
    MainNav: MainNav,
    Hero,
  },
};
</script>
<template>
  <!-- <MainNav /> -->
  <!-- we can use kebab case version of component name we register in script file here. so we can use 'main-nav' here -->
  <div>
    <main-nav />
    <hero />
  </div>
</template>
