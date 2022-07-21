import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";

import JobListings from "@/components/JobResults/JobListings.vue";

describe("JobListings", () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });
  const createStore = (config = {}) => ({
    state: {
      jobs: Array(15).fill({}),
    },
    dispatch: jest.fn(),
    ...config,
  });
  const createConfig = ($route, $store) => ({
    global: {
      mocks: {
        $route,
        $store,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });
  it("creates a job listing for a maximum of 10 jobs", async () => {
    const $route = createRoute({ page: "1" });
    const numberOfJobsinStore = 15;
    const $store = createStore({
      state: {
        jobs: Array(numberOfJobsinStore).fill({}),
      },
    });
    const wrapper = shallowMount(JobListings, createConfig($route, $store));
    const JobListing = wrapper.findAll("[data-test='job-listing']");
    expect(JobListing).toHaveLength(10);
  });

  describe("when query params exclude page number", () => {
    it("displays page number 1", () => {
      const queryPramas = { page: undefined };
      const $route = createRoute(queryPramas);
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      expect(wrapper.text()).toMatch("Page 1");
    });
  });
  describe("when query params includes page number", () => {
    it("displays page number", () => {
      const queryPramas = { page: 3 };
      const $route = createRoute(queryPramas);
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      expect(wrapper.text()).toMatch("Page 3");
    });
  });
  describe("when user on first page of job results", () => {
    it("does not show link to previous page", () => {
      const queryPramas = { page: 1 };
      const $route = createRoute(queryPramas);
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(false);
    });
    it("show link to next page", async () => {
      const queryPramas = { page: 1 };
      const $route = createRoute(queryPramas);
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(true);
    });
  });
  describe("when user on last page of job results", () => {
    it("show link to previous page", async () => {
      const queryPramas = { page: 2 };
      const $route = createRoute(queryPramas);
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(true);
    });
    it("does not show link to next page", async () => {
      const queryPramas = { page: 2 };
      const $route = createRoute(queryPramas);
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(false);
    });
  });

  describe("when component mounts", () => {
    it("makes call to fetch jobs from API", () => {
      const $route = createRoute();
      const dispatch = jest.fn();
      const $store = createStore({ dispatch });
      shallowMount(JobListings, createConfig($route, $store));
      expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS");
    });
  });
});
