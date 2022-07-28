import { createStore } from "vuex";
import state from "@/store/state";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import actions from "@/store/actions";

const store = createStore({
  state,
  getters,
  mutations, //always synchronous
  strict: process.env.NODE_ENV !== "production",
  actions, // can be asynchronous
  modules: {},
});
export default store;
