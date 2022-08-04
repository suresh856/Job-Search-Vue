import { computed } from "vue";
import { useRoute } from "vue-router";

const useCurrentPage = () => {
  const route = useRoute();
  return computed(() => {
    const pageString = route.query.page || "1";
    return Number.parseInt(pageString);
  });
};

export default useCurrentPage;
