//mutations always recieve first argument STATE and then whatever we pass
// for eg in [RECEIVE_JOBS](state, jobs) when we call RECEIVE_JOBS we just pass jobs.
import {
  LOGIN_USER,
  RECEIVE_JOBS,
  ADD_SELECTED_ORGANIZATIONS,
} from "@/store/constants";
const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs;
  },
  [ADD_SELECTED_ORGANIZATIONS](state, organizations) {
    state.selectedOrganizations = organizations;
  },
};

export default mutations;
