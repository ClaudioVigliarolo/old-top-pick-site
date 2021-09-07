import { DEFAULT_CATEGORY_ID, DEFAULT_LEVEL } from "@/constants/constants";
import { Category, Lang, Topic, TopicLevel } from "@/interfaces/interfaces";

export interface State {
  searchKeyword: string;
  topics: Topic[];
  categories: Category[];
  currentCategoryId: number;
  currentLevel: TopicLevel | number;
  currentLanguage: Lang;
  languages: Lang[];
}

export const state: State = {
  searchKeyword: "",
  categories: [],
  topics: [],
  currentCategoryId: DEFAULT_CATEGORY_ID,
  currentLevel: DEFAULT_LEVEL,
  currentLanguage: Lang.EN,
  languages: [],
};
