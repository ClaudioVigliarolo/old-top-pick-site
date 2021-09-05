import { ActionTree, ActionContext } from "vuex";
import { State } from "./state";
import { Mutations, MutationTypes } from "./mutations";
import {
  getAvailableLanguages,
  getCategories,
  getTopicsAlphabetical,
} from "@/utils/api";
import { getLangUrl } from "@/utils/utilts";
import { Lang } from "@/interfaces/interfaces";

export enum ActionTypes {
  ALERT = "ALERT",
  STARTUP = "STARTUP",
  GET_TOPICS = "GET_TOPICS",
  GET_LANGS = "GET_LANGS",
  GET_CATEGS = "GET_CATEGS",
  CONTEXT_RELOAD = "CONTEXT_RELOAD",
  SET_CURR_LANGUAGE = "SET_CURR_LANGUAGE",
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export interface Actions {
  [ActionTypes.ALERT](
    { dispatch }: AugmentedActionContext,
    payload: { message: string; alertType?: AlertType }
  ): void;
  [ActionTypes.STARTUP]({ commit }: AugmentedActionContext): Promise<void>;
}

export enum AlertType {
  NONE,
  ERROR_ALERT,
  ERRORS_QUEUE,
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.ALERT]({ dispatch }, { message, alertType }) {
    switch (alertType) {
      case AlertType.ERROR_ALERT:
        break;
      case AlertType.ERRORS_QUEUE:
        break;
      default:
        break;
    }
  },

  async [ActionTypes.GET_TOPICS]({ commit, state }) {
    const retrievedTopics = await getTopicsAlphabetical(state.currentLanguage);
    if (retrievedTopics != null) {
      commit(MutationTypes.SET_TOPICS, retrievedTopics);
    }
    //todo error handling
  },

  async [ActionTypes.GET_LANGS]({ commit }) {
    const languages = await getAvailableLanguages();
    if (languages != null) {
      commit(MutationTypes.SET_LANGUAGES, languages);
    }
  },

  async [ActionTypes.CONTEXT_RELOAD]({ dispatch }) {
    dispatch(ActionTypes.GET_CATEGS);
    dispatch(ActionTypes.GET_TOPICS);
  },

  async [ActionTypes.GET_CATEGS]({ commit, state }) {
    const categories = await getCategories(state.currentLanguage);
    if (categories != null) {
      commit(MutationTypes.SET_CATEGS, categories);
    }
  },

  async [ActionTypes.STARTUP]({ state, dispatch, commit }) {
    await dispatch(ActionTypes.GET_LANGS);
    const selectedLang = getLangUrl();
    if (state.languages.includes(selectedLang)) {
      commit(MutationTypes.SET_CURR_LANGUAGE, selectedLang);
      dispatch(ActionTypes.CONTEXT_RELOAD);
    } else {
      window.location.href = "http://localhost:8080/" + Lang.EN;
    }
  },

  async [ActionTypes.SET_CURR_LANGUAGE]({ dispatch, state }, currentLanguage) {
    document.location.href = "http://localhost:8080/" + currentLanguage;
    state.currentLanguage = currentLanguage;
    dispatch(ActionTypes.CONTEXT_RELOAD);
  },
};
