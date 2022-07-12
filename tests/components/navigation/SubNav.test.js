import { mount } from "@vue/test-utils";
import SubNav from "@/components/navigation/SubNav.vue";

describe("Subnav", () => {
  describe("when user is on job page", () => {
    it("displays job count", () => {
      const wrapper = mount(SubNav, {
        global: {
          // stubs replaces the component we want in testing. so that it will not search for component for test
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });
      const jobnCount = wrapper.find("[data-test='job-count']");
      expect(jobnCount.exists()).toBe(true);
    });
  });
  describe("when user is not on job page", () => {
    it("does NOT displays job count", () => {
      const wrapper = mount(SubNav, {
        global: {
          // stubs replaces the component we want in testing. so that it will not search for component for test
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });
      const jobnCount = wrapper.find("[data-test='job-count']");
      expect(jobnCount.exists()).toBe(false);
    });
  });
});
