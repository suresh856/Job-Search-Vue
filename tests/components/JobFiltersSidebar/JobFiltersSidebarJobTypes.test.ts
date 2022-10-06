import { shallowMount } from "@vue/test-utils";

import { useUniqueJobTypes } from "@/store/composables";
jest.mock("@/store/composables");
const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;

import JobFilterSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarJobTypes.vue";
describe("JobFiltersSidebarJobTypes", () => {
  it("allows user to filter jobs by job types", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    const wrapper = shallowMount(JobFilterSidebarJobTypes);
    const jobTypesFilter = wrapper.findComponent({
      name: "JobFilterSidebarCheckboxGroup",
    });
    const { uniqueValues, mutation } = jobTypesFilter.props();
    expect(uniqueValues).toEqual(new Set(["Full-time", "Part-time"]));
    expect(mutation).toBe("ADD_SELECTED_JOB_TYPES");
  });
});
