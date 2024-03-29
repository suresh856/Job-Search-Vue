import {
  UNIQUE_ORGANIZATIONS,
  UNIQUE_DEGREES,
  UNIQUE_JOB_TYPES,
  FILTERED_JOBS,
  INCLUDE_JOB_BY_ORGANIZATION,
  INCLUDE_JOB_BY_JOB_TYPE,
  INCLUDE_JOB_BY_DEGREE,
  INCLUDE_JOB_BY_SKILLS,
  INCLUDE_JOB_BY_LOCATION,
} from "@/store/constants";

import { GlobalState } from "@/store/types";
import { Degree, Job } from "@/api/types";

interface IncludeJobGetters {
  INCLUDE_JOB_BY_ORGANIZATION: (job: Job) => boolean;
  INCLUDE_JOB_BY_JOB_TYPE: (job: Job) => boolean;
  INCLUDE_JOB_BY_DEGREE: (job: Job) => boolean;
  INCLUDE_JOB_BY_SKILLS: (job: Job) => boolean;
  INCLUDE_JOB_BY_LOCATION: (job: Job) => boolean;
}

const getters = {
  [UNIQUE_ORGANIZATIONS](state: GlobalState) {
    const uniqueOrganizations = new Set<string>();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },
  [UNIQUE_JOB_TYPES](state: GlobalState) {
    const uniqueJobTypes = new Set<string>();
    state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
    return uniqueJobTypes;
  },
  [INCLUDE_JOB_BY_ORGANIZATION]: (state: GlobalState) => (job: Job) => {
    if (state.selectedOrganizations.length === 0) return true;
    return state.selectedOrganizations.includes(job.organization);
  },
  [INCLUDE_JOB_BY_JOB_TYPE]: (state: GlobalState) => (job: Job) => {
    if (state.selectedJobTypes.length === 0) return true;
    return state.selectedJobTypes.includes(job.jobType);
  },
  [FILTERED_JOBS](state: GlobalState, getters: IncludeJobGetters) {
    return state.jobs
      .filter((job) => getters.INCLUDE_JOB_BY_ORGANIZATION(job))
      .filter((job) => getters.INCLUDE_JOB_BY_DEGREE(job))
      .filter((job) => getters.INCLUDE_JOB_BY_JOB_TYPE(job))
      .filter((job) => getters.INCLUDE_JOB_BY_SKILLS(job))
      .filter((job) => getters.INCLUDE_JOB_BY_LOCATION(job));
  },
  [INCLUDE_JOB_BY_DEGREE]: (state: GlobalState) => (job: Job) => {
    if (state.selectedDegrees.length === 0) return true;
    return state.selectedDegrees.includes(job.degree);
  },
  [INCLUDE_JOB_BY_SKILLS]: (state: GlobalState) => (job: Job) => {
    if (state.skillsSearchTerm.length === 0) return true;
    return job.title
      .toLowerCase()
      .includes(state.skillsSearchTerm.toLowerCase());
  },
  [INCLUDE_JOB_BY_LOCATION]: (state: GlobalState) => (job: Job) => {
    if (state.locationSearchTerm.length === 0) return true;
    const include = job.locations.some((location) => {
      return location
        .toLowerCase()
        .includes(state.locationSearchTerm.toLowerCase());
    });
    return include;
  },
  [UNIQUE_DEGREES](state: GlobalState) {
    const uniqueDegrees = new Set<string>();
    state.degrees.forEach((degree) => uniqueDegrees.add(degree.degree));
    return uniqueDegrees;
  },
};

export default getters;
