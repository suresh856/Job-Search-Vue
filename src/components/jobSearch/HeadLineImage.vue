<template class="">
  <img
    class="w-80 h-80 object-contain self-center justify-self-center mx-auto rounded-full border-none"
    :src="imageUrl"
  />
</template>
<script>
import nextElementInList from "@/Utils/nextElementInList";
export default {
  name: "HeadLineImage",
  data() {
    return {
      imageUrl:
        "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
      interval: null,
    };
  },

  created() {
    this.changeImage();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeImage() {
      this.interval = setInterval(() => {
        const images = [
          "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
          "https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg",
          "https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg",
          "https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg",
        ];
        this.imageUrl = nextElementInList(images, this.imageUrl);
      }, 4000);
    },
  },
};
</script>
