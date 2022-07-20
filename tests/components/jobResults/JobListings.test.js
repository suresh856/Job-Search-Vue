import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios"); // to mock module using Jest

import JobListings from "@/components/JobResults/JobListings.vue";
import { jest } from "@jest/globals";

describe("JobListings", () => {
  afterEach(() => {
    axios.get.mockReset();
  });
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) }); // to mock specific things
  });
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });
  const createConfig = ($route) => ({
    global: {
      mocks: {
        $route,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });
  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: [] }); // to mock specific things
    const $route = createRoute();
    shallowMount(JobListings, createConfig($route));
    expect(axios.get).toHaveBeenCalledWith("http://mytestapi.com/jobs");
  });
  it("creates a job listing for a maximum of 10 jobs", async () => {
    const $route = createRoute({ page: "1" });
    const wrapper = shallowMount(JobListings, createConfig($route));
    await flushPromises(); // axios promises are resolved immediately
    const JobListing = wrapper.findAll("[data-test='job-listing']");
    expect(JobListing).toHaveLength(10);
  });

  describe("when query params exclude page number", () => {
    it("displays page number 1", () => {
      const queryPramas = { page: undefined };
      const $route = createRoute(queryPramas);

      const wrapper = shallowMount(JobListings, createConfig($route));
      expect(wrapper.text()).toMatch("Page 1");
    });
  });
  describe("when query params includes page number", () => {
    it("displays page number", () => {
      const queryPramas = { page: 3 };
      const $route = createRoute(queryPramas);

      const wrapper = shallowMount(JobListings, createConfig($route));
      expect(wrapper.text()).toMatch("Page 3");
    });
  });
  describe("when user on first page of job results", () => {
    it("does not show link to previous page", () => {
      const queryPramas = { page: 1 };
      const $route = createRoute(queryPramas);

      const wrapper = shallowMount(JobListings, createConfig($route));
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(false);
    });
    it("show link to next page", async () => {
      const queryPramas = { page: 1 };
      const $route = createRoute(queryPramas);

      const wrapper = shallowMount(JobListings, createConfig($route));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(true);
    });
  });
  describe("when user on last page of job results", () => {
    it("show link to previous page", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const queryPramas = { page: 2 };
      const $route = createRoute(queryPramas);

      const wrapper = shallowMount(JobListings, createConfig($route));
      await flushPromises();
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(true);
    });
    it("does not show link to next page", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const queryPramas = { page: 2 };
      const $route = createRoute(queryPramas);

      const wrapper = shallowMount(JobListings, createConfig($route));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(false);
    });
  });
});
