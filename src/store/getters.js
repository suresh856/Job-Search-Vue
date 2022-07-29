// it is just like computed in component. Whenever state changes it will run again and give the updated result

import {
  UNIQUE_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
  FILTERED_JOBS,
  INCLUDE_JOB_BY_JOB_TYPE,
  INCLUDE_JOB_BY_ORGANIZATION,
} from "@/store/constants";
const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganizations = new Set();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },
  [UNIQUE_JOB_TYPES](state) {
    const uniqueJobTypes = new Set();
    state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
    return uniqueJobTypes;
  },
  // if we want to pass any argument to getter then we have to implememt it in a way that
  // getter return a function from getter. like below example
  [INCLUDE_JOB_BY_JOB_TYPE]: (state) => (job) => {
    if (state.selectedJobTypes.length === 0) return true;
    return state.selectedJobTypes.includes(job.jobType);
  },
  [INCLUDE_JOB_BY_ORGANIZATION]: (state) => (job) => {
    if (state.selectedOrganizations.length === 0) return true;
    return state.selectedOrganizations.includes(job.organization);
  },
  // vuex always provide complete getters object as second argument/parameter in getters
  // first is always state and second is getter object.
  [FILTERED_JOBS](state, getters) {
    return state.jobs
      .filter((job) => getters.INCLUDE_JOB_BY_ORGANIZATION(job))
      .filter((job) => getters.INCLUDE_JOB_BY_JOB_TYPE(job));
  },
};

export default getters;
