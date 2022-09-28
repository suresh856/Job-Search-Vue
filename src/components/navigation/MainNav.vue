<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: url }"
          class="flex items-center h-full text-xl font-bold"
          >{{ company }}</router-link
        >
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5 font-semibold"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            data-test="login-button"
            text="Sign in"
            type="primary"
            @click="LOGIN_USER()"
          />
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations } from "vuex";
import ActionButton from "@/components/shared/ActionButton.vue";
import ProfileImage from "@/components/navigation/ProfileImage.vue";
import SubNav from "@/components/navigation/SubNav.vue";
export default defineComponent({
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      company: "Suresh Careers",
      url: "Home",
      menuItems: [
        { text: "Teams", url: "/teams", urlName: "Teams" },
        { text: "Locations", url: "/", urlName: "" },
        { text: "Life at Suresh Corp", url: "/", urlName: "" },
        { text: "How we hire", url: "/", urlName: "" },
        { text: "Students", url: "/", urlName: "" },
        { text: "Jobs", url: "/jobs/results", urlName: "JobResults" },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
    // isLoggedIn() {
    //   return this.$store.state.isLoggedIn;
    // },
    // above code can be simplified by helper function below. Other syntax aslo available for helper function
    ...mapState(["isLoggedIn"]), // pass rest of state object names here.
  },
  methods: {
    // LOGIN_USER() {
    //   this.$store.commit(LOGIN_USER);
    // },
    ...mapMutations(["LOGIN_USER"]), // it will give this.LOGIN_USER method in our component. we can pass more mutations names in array to get them also.
  },
});
</script>
