import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";
import state from "@/store/state";
import mutations from "@/store/mutations";
import getters from "@/store/getters";
import actions from "@/store/actions";
import { GlobalState } from "./types";

export const key: InjectionKey<Store<GlobalState>> = Symbol();

const store = createStore<GlobalState>({
  state,
  mutations,
  getters,
  actions,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
