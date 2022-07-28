import getters from "@/store/getters";
describe("getters", () => {
  describe("UNIQUE_ORGANIZATIONS", () => {
    it("finds unique organizations from list of jobs", () => {
      const state = {
        jobs: [
          { organization: "Google" },
          { organization: "Amazone" },
          { organization: "Google" },
        ],
      };
      const result = getters.UNIQUE_ORGANIZATIONS(state);
      expect(result).toEqual(new Set(["Google", "Amazone"]));
    });
  });
  describe("FILTERED_JOB_BY_ORGANIZATIONS", () => {
    it("identifies jobs that are associated with given organizations", () => {
      const state = {
        jobs: [
          { organization: "Google" },
          { organization: "Amazone" },
          { organization: "Microsoft" },
          { organization: "Microsoft" },
        ],
        selectedOrganizations: ["Google", "Microsoft"],
      };
      const filteredJobs = getters.FILTERED_JOB_BY_ORGANIZATIONS(state);
      expect(filteredJobs).toEqual([
        { organization: "Google" },
        { organization: "Microsoft" },
        { organization: "Microsoft" },
      ]);
    });
    describe("when user has not selected any organizations", () => {
      it("returns all jobs", () => {
        const state = {
          jobs: [
            { organization: "Google" },
            { organization: "Amazone" },
            { organization: "Microsoft" },
            { organization: "Microsoft" },
          ],
          selectedOrganizations: [],
        };
        const filteredJobs = getters.FILTERED_JOB_BY_ORGANIZATIONS(state);
        expect(filteredJobs).toEqual([
          { organization: "Google" },
          { organization: "Amazone" },
          { organization: "Microsoft" },
          { organization: "Microsoft" },
        ]);
      });
    });
  });
});
