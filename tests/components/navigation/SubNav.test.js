import { mount } from "@vue/test-utils";
import SubNav from "@/components/navigation/SubNav.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

jest.mock("vue-router");
jest.mock("vuex");

describe("Subnav", () => {
  const createConfig = () => ({
    global: {
      // mocks used to mock real world object here. we can give our own object for real world object using mocks
      //used with optional api
      // mocks: {
      //   $route: {
      //     name: routeName,
      //   },
      //   $store,
      // },
      // stubs replaces the component we want in testing. so that it will not search for component for test
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });
  describe("when user is on job page", () => {
    it("displays job count", () => {
      useRoute.mockReturnValue({
        name: "JobResults",
      });
      // const routeName = "JobResults";
      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
        },
      });
      // const $store = {
      //   getters: {
      //     FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
      //   },
      // };
      const wrapper = mount(SubNav, createConfig());
      const jobnCount = wrapper.find("[data-test='job-count']");
      expect(jobnCount.exists()).toBe(true);
      expect(jobnCount.text()).toMatch("2 jobs matched"); // 2 jobs coming from array we used above
    });
  });
  describe("when user is not on job page", () => {
    it("does NOT displays job count", () => {
      //-------------------if not using factory function here createConfig then have to give other things in second parameter in mount function -------------------------------------
      // const $route = {
      //   name: "Home",
      // };
      // const wrapper = mount(SubNav, {
      //   global: {
      //     mocks: {
      //       $route,
      //     },
      //     // stubs replaces the component we want in testing. so that it will not search for component for test
      //     stubs: {
      //       FontAwesomeIcon: true,
      //     },
      //   },
      // });
      //------------------------------------------------------------------------------------------------
      useRoute.mockReturnValue({
        name: "Home",
      });
      // const routeName = "JobResults";
      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
        },
      });
      const wrapper = mount(SubNav, createConfig());
      const jobnCount = wrapper.find("[data-test='job-count']");
      expect(jobnCount.exists()).toBe(false);
    });
  });
});
