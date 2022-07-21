import { createStore } from "vuex";
import getJobs from "@/api/getJobs";

//mutations
export const LOGIN_USER = "LOGIN_USER";
export const RECEIVE_JOBS = "RECEIVE_JOBS";

//actions
export const FETCH_JOBS = "FETCH_JOBS";

export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
  };
};
//mutations always recieve first argument STATE and then whatever we pass
// for eg in [RECEIVE_JOBS](state, jobs) when we call RECEIVE_JOBS we just pass jobs.
export const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs;
  },
};

// actions recieve context as an argument which is similar to store so we can use commit method on it.
//context.commit(RECEIVE_JOBS, jobListings);  -- this means call RECEIVE_JOBS mutation with jobListing parameter
//(RECEIVE_JOBS is mutation so always have first argument as STATE and whatever we pass after that )
export const actions = {
  [FETCH_JOBS]: async (context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings); // RECIEVE_JOBS(state,jobListing) anything we pass after mutation name here is passed after state in mutation
  },
};

const store = createStore({
  state,
  getters: {},
  mutations, //always synchronous
  strict: process.env.NODE_ENV !== "production",
  actions, // can we asynchronous
  modules: {},
});
export default store;
