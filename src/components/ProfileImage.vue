<template>
  <img :src="imageLink" class="w-8 h-8 object-contain rounded-3xl" />
</template>
<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      // to dynamically load assets from /src/assets use below URL syntax with import.meta.url
      // imageLink: new URL("@/assets/images/ToonLink.png", import.meta.url).href,
      imageLink:
        "https://png.pngtree.com/png-clipart/20190614/original/pngtree-male-student-icon-png-image_3728104.jpg",
    };
  },
};
</script>
