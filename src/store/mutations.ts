import { Category, Lang, Topic, TopicLevel } from "@/interfaces/interfaces";
import { MutationTree } from "vuex";

import { State } from "./state";

export enum MutationTypes {
  SET_TOAST = "SET_TOAST",
  SET_TOPICS = "SET_TOPICS",
  SET_LANGUAGES = "SET_LANGUAGES",
  SET_CURR_LANGUAGE = "SET_CURR_LANGUAGE",
  SET_CATEGS = "SET_CATEGS",
  SET_CURR_CATEGORY_ID = "SET_CURR_CATEGORY_ID",
  SET_CURR_LEVEL = "SET_CURR_LEVEL",
  SET_KEYWORD = "SET_KEYWORD",
}

export interface Mutations<S = State> {
  [MutationTypes.SET_CATEGS](state: S, categories: Category[]): void;
  [MutationTypes.SET_TOPICS](state: S, topics: Topic[]): void;
  [MutationTypes.SET_LANGUAGES](state: S, langs: Lang[]): void;
  [MutationTypes.SET_CURR_LANGUAGE](state: S, lang: Lang): void;

  [MutationTypes.SET_KEYWORD](state: S, keyword: string): void;
  [MutationTypes.SET_CURR_LEVEL](state: S, level: TopicLevel): void;

  [MutationTypes.SET_CURR_CATEGORY_ID](state: S, id: number): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_CATEGS](state, categories) {
    state.categories = categories;
  },

  [MutationTypes.SET_TOPICS](state, topics) {
    state.topics = topics;
  },

  [MutationTypes.SET_LANGUAGES](state, languages) {
    state.languages = languages;
  },

  [MutationTypes.SET_CURR_LANGUAGE](state, currentLanguage) {
    state.currentLanguage = currentLanguage;
  },

  [MutationTypes.SET_CURR_CATEGORY_ID](state, currentCategoryId) {
    state.currentCategoryId = currentCategoryId;
  },

  [MutationTypes.SET_CURR_LEVEL](state, currentLevel) {
    state.currentLevel = currentLevel;
  },

  [MutationTypes.SET_KEYWORD](state, searchKeyword) {
    state.searchKeyword = searchKeyword;
  },
};
