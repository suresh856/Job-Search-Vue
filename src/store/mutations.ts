import {
  LOGIN_USER,
  RECEIVE_JOBS,
  RECIEVE_DEGREES,
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_DEGREES,
  CLEAR_USER_JOB_FILTER_SELECTIONS,
} from "@/store/constants";

import { Degree, Job } from "@/api/types";
import { GlobalState } from "@/store/types";

const mutations = {
  [LOGIN_USER](state: GlobalState) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state: GlobalState, jobs: Job[]) {
    state.jobs = jobs;
  },
  [ADD_SELECTED_ORGANIZATIONS](state: GlobalState, organizations: string[]) {
    state.selectedOrganizations = organizations;
  },
  [ADD_SELECTED_JOB_TYPES](state: GlobalState, jobTypes: string[]) {
    state.selectedJobTypes = jobTypes;
  },
  [RECIEVE_DEGREES](state: GlobalState, degrees: Degree[]) {
    state.degrees = degrees;
  },
  [ADD_SELECTED_DEGREES](state: GlobalState, degrees: string[]) {
    state.selectedDegrees = degrees;
  },
  [CLEAR_USER_JOB_FILTER_SELECTIONS](state: GlobalState) {
    state.selectedDegrees = [];
    state.selectedJobTypes = [];
    state.selectedOrganizations = [];
  },
};

export default mutations;
