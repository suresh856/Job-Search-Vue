import mutations from "@/store/mutations";

describe("mutations", () => {
  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      const state = { isLoggedIn: false };
      mutations.LOGIN_USER(state);
      expect(state).toEqual({ isLoggedIn: true });
    });
  });
  describe("RECEIVE_JOBS", () => {
    it("recieves jobs from API response", () => {
      const state = { jobs: [] };
      mutations.RECEIVE_JOBS(state, ["job 1", "job 2"]);
      expect(state).toEqual({ jobs: ["job 1", "job 2"] });
    });
  });
  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("updates organizations that user has chosen to filter jobs by", () => {
      const state = { selectedOrganizations: [] };
      mutations.ADD_SELECTED_ORGANIZATIONS(state, ["org1", "org2"]);
      expect(state).toEqual({ selectedOrganizations: ["org1", "org2"] });
    });
  });
  describe("ADD_SELECTED_JOB_TYPES", () => {
    it("updates jobtypes that user has chosen to filter jobs by", () => {
      const state = { selectedJobTypes: [] };
      mutations.ADD_SELECTED_JOB_TYPES(state, ["full-time", "part-time"]);
      expect(state).toEqual({ selectedJobTypes: ["full-time", "part-time"] });
    });
  });
});
