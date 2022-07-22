import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import "@/assets/tailwind.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faBuilding,
  faMapMarkerAlt,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);
library.add(faMapMarkerAlt);
library.add(faBuilding);
library.add(faAngleDown);
library.add(faAngleUp);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
