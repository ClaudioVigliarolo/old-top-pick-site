import { DEFAULT_CATEGORY_ID, DEFAULT_LEVEL } from "@/constants/constants";
import { Section } from "@/interfaces/interfaces";
import { sectionTopicListSort } from "@/utils/sorting";
import { isStrBlank } from "@/utils/utils";
import { GetterTree } from "vuex";
import { State } from "./state";

export type Getters = {
  displayedTopics(state: State): Section[];
};

export const getters: GetterTree<State, State> & Getters = {
  displayedTopics: (state) => {
    let all = true;

    let filteredTopics = [...state.topics];
    if (!isStrBlank(state.searchKeyword)) {
      all = false;
      filteredTopics = filteredTopics.filter((top) =>
        top.title.includes(state.searchKeyword)
      );
    }

    if (state.currentLevel !== DEFAULT_LEVEL) {
      all = false;
      filteredTopics = filteredTopics.filter(
        (top) => top.level === state.currentLevel
      );
    }

    if (state.currentCategoryId !== DEFAULT_CATEGORY_ID) {
      all = false;
      const tempTopics = [...filteredTopics];
      filteredTopics = [];
      tempTopics.forEach((top) => {
        if (
          top.categories.some((categ) => categ.id === state.currentCategoryId)
        ) {
          filteredTopics.push(top);
        }
      });
    }

    if (all) {
      return sectionTopicListSort(state.topics);
    } else {
      return [
        {
          title: filteredTopics.length > 0 ? "Search Results" : "No Results",
          data: filteredTopics,
        },
      ];
    }
  },
};
