// it is just like computed in component. Whenever state changes it will run again and give the updated result

import {
  UNIQUE_ORGANIZATIONS,
  FILTERED_JOB_BY_ORGANIZATIONS,
} from "@/store/constants";
const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganizations = new Set();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },
  [FILTERED_JOB_BY_ORGANIZATIONS](state) {
    if (state.selectedOrganizations.length === 0) {
      return state.jobs;
    }
    return state.jobs.filter((job) =>
      state.selectedOrganizations.includes(job.organization)
    );
  },
};

export default getters;
