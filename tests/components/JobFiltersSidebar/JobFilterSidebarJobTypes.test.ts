import { mount } from "@vue/test-utils";
import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarJobTypes.vue";

import { useStore } from "vuex";
jest.mock("vuex");

import { useRouter } from "vue-router";
jest.mock("vue-router");

import { useUniqueJobTypes } from "@/store/composables";
jest.mock("@/store/composables");

const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;
const useRouterMock = useRouter as jest.Mock;
const useStoreMock = useStore as jest.Mock;
describe("JobFiltersSidebarJobTypes", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  it("renders unique list of job types for filtering jobs", async () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    useRouterMock.mockReturnValue({ push: jest.fn() });
    const wrapper = mount(JobFiltersSidebarJobTypes, createConfig());
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    const jobTypeLabels = wrapper.findAll("[data-test='jobTypes']");
    const jobTypes = jobTypeLabels.map((node) => node.text());
    expect(jobTypes).toEqual(["Full-time", "Part-time"]);
  });

  describe("when user clicks checkbox", () => {
    it("communicates that user has selected checkbox for job type", async () => {
      const commit = jest.fn();
      useUniqueJobTypesMock.mockReturnValue(
        new Set(["Full-time", "Part-time"])
      );
      useStoreMock.mockReturnValue({ commit });
      useRouterMock.mockReturnValue({ push: jest.fn() });
      const wrapper = mount(JobFiltersSidebarJobTypes, createConfig());
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const fullTimeInput = wrapper.find("[data-test='Full-time']");
      await fullTimeInput.setValue(true);
      expect(commit).toHaveBeenCalledWith("ADD_SELECTED_JOB_TYPES", [
        "Full-time",
      ]);
    });

    it("navigates user to job results page to see fresh batch of filtered jobs", async () => {
      useUniqueJobTypesMock.mockReturnValue(
        new Set(["Full-time", "Part-time"])
      );
      const push = jest.fn();
      useRouterMock.mockReturnValue({ push });
      const wrapper = mount(JobFiltersSidebarJobTypes, createConfig());
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const fullTimeInput = wrapper.find("[data-test='Full-time']");
      await fullTimeInput.setValue(true);

      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});