import { shallowMount, flushPromises } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios"); // to mock module using Jest

import JobListings from "@/components/JobResults/JobListings.vue";
import { jest } from "@jest/globals";

describe("JobListings", () => {
  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: [] }); // to mock specific things
    shallowMount(JobListings);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });
  it("creates a job listing for each recieved job", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) }); // to mock specific things
    const wrapper = shallowMount(JobListings);
    await flushPromises(); // axios promises are resolved immediately
    const JobListing = wrapper.findAll("[data-test='job-listing']");
    expect(JobListing).toHaveLength(15);
  });
});
