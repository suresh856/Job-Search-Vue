import getters from "@/store/getters";
import { createState, createJob, createDegree } from "./utils";

describe("getters", () => {
  describe("UNIQUE_ORGANIZATIONS", () => {
    it("finds unique organizations from list of jobs", () => {
      const jobs = [
        createJob({ organization: "Google" }),
        createJob({ organization: "Amazon" }),
        createJob({ organization: "Google" }),
      ];
      const state = createState({ jobs });
      const result = getters.UNIQUE_ORGANIZATIONS(state);
      expect(result).toEqual(new Set(["Google", "Amazon"]));
    });
  });
  describe("UNIQUE_DEGREES", () => {
    it("finds unique degrees from list of degrees", () => {
      const degrees = [
        createDegree({ degree: "d1" }),
        createDegree({ degree: "d2" }),
        createDegree({ degree: "d2" }),
      ];
      const state = createState({ degrees });
      const result = getters.UNIQUE_DEGREES(state);
      expect(result).toEqual(new Set(["d1", "d2"]));
    });
  });
  describe("UNIQUE_JOB_TYPES", () => {
    it("finds unique job types from list of jobs", () => {
      const jobs = [
        createJob({ jobType: "Full-time" }),
        createJob({ jobType: "Temporary" }),
        createJob({ jobType: "Full-time" }),
      ];
      const state = createState({ jobs });
      const result = getters.UNIQUE_JOB_TYPES(state);
      expect(result).toEqual(new Set(["Full-time", "Temporary"]));
    });
  });

  describe("INCLUDE_JOB_BY_ORGANIZATION", () => {
    describe("when the user has not selected any organizations", () => {
      it("includes job", () => {
        const state = createState({
          selectedOrganizations: [],
        });
        const job = createJob({ organization: "Google" });
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
        expect(includeJob).toBe(true);
      });
    });

    it("identifies if job is associated with given organizations", () => {
      const state = createState({
        selectedOrganizations: ["Google", "Microsoft"],
      });
      const job = createJob({ organization: "Google" });
      const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
      expect(includeJob).toBe(true);
    });
  });

  describe("INCLUDE_JOB_BY_JOB_TYPE", () => {
    describe("when the user has not selected any job types", () => {
      it("includes job", () => {
        const state = createState({
          selectedJobTypes: [],
        });
        const job = createJob({ jobType: "Full-time" });
        const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
        expect(includeJob).toBe(true);
      });
    });

    it("identifies if job is associated with given job types", () => {
      const state = createState({
        selectedJobTypes: ["Full-time", "Part-time"],
      });
      const job = createJob({ jobType: "Full-time" });
      const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
      expect(includeJob).toBe(true);
    });
  });

  describe("INCLUDE_JOB_BY_DEGREE", () => {
    describe("when the user has not selected any degree", () => {
      it("includes degrees", () => {
        const state = createState({
          selectedDegrees: [],
        });
        const degree = createJob({ degree: "Master's" });
        const includeJob = getters.INCLUDE_JOB_BY_DEGREE(state)(degree);
        expect(includeJob).toBe(true);
      });
    });

    it("identifies if job is associated with given degree", () => {
      const state = createState({
        selectedJobTypes: ["Master's", "Intern"],
      });
      const job = createJob({ degree: "Master's" });
      const includeJob = getters.INCLUDE_JOB_BY_DEGREE(state)(job);
      expect(includeJob).toBe(true);
    });
  });

  describe("FILTERED_JOBS", () => {
    it("filters jobs by organization, degree and job type", () => {
      const INCLUDE_JOB_BY_ORGANIZATION = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_JOB_TYPE = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_DEGREE = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_SKILLS = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_LOCATION = jest.fn().mockReturnValue(true);
      const mockGetters = {
        INCLUDE_JOB_BY_ORGANIZATION,
        INCLUDE_JOB_BY_JOB_TYPE,
        INCLUDE_JOB_BY_DEGREE,
        INCLUDE_JOB_BY_SKILLS,
        INCLUDE_JOB_BY_LOCATION,
      };
      const job = createJob({ title: "Best job ever" });
      const state = createState({ jobs: [job] });
      const result = getters.FILTERED_JOBS(state, mockGetters);
      expect(result).toEqual([job]);
      expect(INCLUDE_JOB_BY_ORGANIZATION).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_JOB_TYPE).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_DEGREE).toHaveBeenCalledWith(job);
    });
  });

  describe("INCLUDE_JOB_BY_SKILLS", () => {
    describe("when the user not entered any skills", () => {
      it("includes all jobs", () => {
        const state = createState({
          skillsSearchTerm: "",
        });
        const degree = createJob({ title: "Vue Developer" });
        const includeJob = getters.INCLUDE_JOB_BY_DEGREE(state)(degree);
        expect(includeJob).toBe(true);
      });
    });

    it("identifies if job is associated with given skill", () => {
      const state = createState({
        skillsSearchTerm: "Vue",
      });
      const job = createJob({ title: "Vue Developer" });
      const includeJob = getters.INCLUDE_JOB_BY_SKILLS(state)(job);
      expect(includeJob).toBe(true);
    });
  });
});
