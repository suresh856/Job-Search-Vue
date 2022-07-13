import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import "@/assets/tailwind.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
