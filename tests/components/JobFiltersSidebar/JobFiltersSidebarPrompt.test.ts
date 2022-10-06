import { mount } from "@vue/test-utils";

import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

import JobFilterSidebarPrompt from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarPrompt.vue";

describe("JobFiltersSidebarPrompt", () => {
  describe("when user clicks clear filters button", () => {
    it("sends message to clear all of user's job search filters", async () => {
      const commit = jest.fn();
      useStoreMock.mockReturnValue({ commit });
      const wrapper = mount(JobFilterSidebarPrompt);
      const button = wrapper.find("[data-test='clear-user-job-filters']");
      await button.trigger("click");
      expect(commit).toHaveBeenCalledWith("CLEAR_USER_JOB_FILTER_SELECTIONS");
    });
  });
});
