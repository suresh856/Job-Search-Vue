import { mount } from "@vue/test-utils";

import { useFilteredJobs } from "@/store/composables";
jest.mock("@/store/composables");

import useConfirmRoute from "@/composables/useConfirmRoute";
jest.mock("@/composables/useConfirmRoute");

const useFilteredJobsMock = useFilteredJobs as jest.Mock;
const useConfirmRouteMock = useConfirmRoute as jest.Mock;

import Subnav from "@/components/navigation/SubNav.vue";

describe("Subnav", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  describe("when user is on job page", () => {
    it("displays job count", () => {
      useConfirmRouteMock.mockReturnValue(true);
      useFilteredJobsMock.mockReturnValue([{ id: 1 }, { id: 2 }]);
      const wrapper = mount(Subnav, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toMatch("2 jobs matched");
    });
  });

  describe("when user is not on jobs page", () => {
    it("does NOT display job count", () => {
      useConfirmRouteMock.mockReturnValue(false);
      useFilteredJobsMock.mockReturnValue([]);
      const wrapper = mount(Subnav, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});

// ----------------------------------------------------------------------------------------------
// -OLD CODE
// ----------------------------------------------------------------------------------------------
// import { mount } from "@vue/test-utils";
// import SubNav from "@/components/navigation/SubNav.vue";
// import { useRoute } from "vue-router";
// import { useStore } from "vuex";

// //jest.mock("vue-router");
// //jest.mock("vuex");
// const useRouteMock = useRoute as jest.Mock;
// const useStoreMock = useStore as jest.Mock;
// describe("Subnav", () => {
//   const createConfig = () => ({
//     global: {
//       // mocks used to mock real world object here. we can give our own object for real world object using mocks
//       //used with optional api
//       // mocks: {
//       //   $route: {
//       //     name: routeName,
//       //   },
//       //   $store,
//       // },
//       // stubs replaces the component we want in testing. so that it will not search for component for test
//       stubs: {
//         FontAwesomeIcon: true,
//       },
//     },
//   });
//   describe("when user is on job page", () => {
//     it("displays job count", () => {
//       useRouteMock.mockReturnValue({
//         name: "JobResults",
//       });
//       // const routeName = "JobResults";
//       useStoreMock.mockReturnValue({
//         getters: {
//           FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
//         },
//       });
//       // const $store = {
//       //   getters: {
//       //     FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
//       //   },
//       // };
//       const wrapper = mount(SubNav, createConfig());
//       const jobnCount = wrapper.find("[data-test='job-count']");
//       expect(jobnCount.exists()).toBe(true);
//       expect(jobnCount.text()).toMatch("2 jobs matched"); // 2 jobs coming from array we used above
//     });
//   });
//   describe("when user is not on job page", () => {
//     it("does NOT displays job count", () => {
//       //-------------------if not using factory function here createConfig then have to give other things in second parameter in mount function -------------------------------------
//       // const $route = {
//       //   name: "Home",
//       // };
//       // const wrapper = mount(SubNav, {
//       //   global: {
//       //     mocks: {
//       //       $route,
//       //     },
//       //     // stubs replaces the component we want in testing. so that it will not search for component for test
//       //     stubs: {
//       //       FontAwesomeIcon: true,
//       //     },
//       //   },
//       // });
//       //------------------------------------------------------------------------------------------------
//       useRouteMock.mockReturnValue({
//         name: "Home",
//       });
//       // const routeName = "JobResults";
//       useStoreMock.mockReturnValue({
//         getters: {
//           FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
//         },
//       });
//       const wrapper = mount(SubNav, createConfig());
//       const jobnCount = wrapper.find("[data-test='job-count']");
//       expect(jobnCount.exists()).toBe(false);
//     });
//   });
// });
