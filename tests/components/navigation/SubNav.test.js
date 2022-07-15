import { mount } from "@vue/test-utils";
import SubNav from "@/components/navigation/SubNav.vue";

describe("Subnav", () => {
  const createConfig = (routeName) => ({
    global: {
      // mocks used to mock real world object here. we can give our own object for real world object using mocks
      mocks: {
        $route: {
          name: routeName,
        },
      },
      // stubs replaces the component we want in testing. so that it will not search for component for test
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });
  describe("when user is on job page", () => {
    it("displays job count", () => {
      const routeName = "JobResults";
      const wrapper = mount(SubNav, createConfig(routeName));
      const jobnCount = wrapper.find("[data-test='job-count']");
      expect(jobnCount.exists()).toBe(true);
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
      const routeName = "Home";
      const wrapper = mount(SubNav, createConfig(routeName));
      const jobnCount = wrapper.find("[data-test='job-count']");
      expect(jobnCount.exists()).toBe(false);
    });
  });
});
