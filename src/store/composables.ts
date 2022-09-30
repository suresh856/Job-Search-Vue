import { computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";
import {
  FILTERED_JOBS,
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANIZATIONS,
  FETCH_JOBS,
  FETCH_DEGREES,
  UNIQUE_DEGREES,
} from "@/store/constants";

import { Job } from "@/api/types";

/* GETTERS */
export const useFilteredJobs = () => {
  const store = useStore(key);
  return computed<Job[]>(() => store.getters[FILTERED_JOBS]);
};

export const useUniqueJobTypes = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_JOB_TYPES]);
};

export const useUniqueOrganizations = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_ORGANIZATIONS]);
};

export const useUniqueDegrees = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_DEGREES]);
};

/* ACTIONS */
export const useFetchJobsDispatch = () => {
  const store = useStore(key);
  store.dispatch(FETCH_JOBS);
};

export const useFetchDegreesDispatch = () => {
  const store = useStore(key);
  store.dispatch(FETCH_DEGREES);
};
