import { API_HOSTNAME } from "@/constants/constants";
import { Category, Lang, Question, Topic } from "@/interfaces/interfaces";
import axios from "axios";

export const getCategories = async (lang: Lang): Promise<Category[] | null> => {
  try {
    const response = await axios.get(`${API_HOSTNAME}/categories/` + lang, {
      headers: {},
    });
    return response.status === 200 ? response.data : null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getQuestionsByTopic = async (
  id: number
): Promise<Question[] | null> => {
  try {
    const response = await axios.get(`${API_HOSTNAME}/questions/topic/${id}`, {
      headers: {},
    });
    return response.status === 200 ? response.data : null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getTopic = async (id: number): Promise<Topic | null> => {
  try {
    const response = await axios.get(`${API_HOSTNAME}/topic/` + id, {
      headers: {},
    });
    return response.status === 200 ? response.data : null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getTopicsAlphabetical = async (
  lang: Lang
): Promise<Topic[] | null> => {
  try {
    const response = await axios.get(
      `${API_HOSTNAME}/topics/alphabetical/` + lang,
      {
        headers: {},
      }
    );
    return response.status === 200 ? response.data : null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getAvailableLanguages = async (): Promise<Lang[] | null> => {
  try {
    const response = await axios.get(`${API_HOSTNAME}/languages/`, {
      headers: {},
    });
    return response.status === 200 ? response.data : null;
  } catch (err) {
    console.error(err);
    return null;
  }
};
