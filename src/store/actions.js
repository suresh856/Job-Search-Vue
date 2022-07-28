// actions recieve context as an argument which is similar to store so we can use commit method on it.
//context.commit(RECEIVE_JOBS, jobListings);  -- this means call RECEIVE_JOBS mutation with jobListing parameter
//(RECEIVE_JOBS is mutation so always have first argument as STATE and whatever we pass after that )
import { FETCH_JOBS, RECEIVE_JOBS } from "@/store/constants";
import getJobs from "@/api/getJobs";
const actions = {
  [FETCH_JOBS]: async (context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings); // RECIEVE_JOBS(state,jobListing) anything we pass after mutation name here is passed after state in mutation
  },
};

export default actions;
