import { Lang, TopicLevel } from "@/interfaces/interfaces";

export const getTopicLevelLabel = (level: TopicLevel | undefined): string => {
  switch (level) {
    case TopicLevel.EASY:
      return "Easy";
    case TopicLevel.MEDIUM:
      return "Medium";
    case TopicLevel.HARD:
      return "Hard";
    default:
      return "";
  }
};

export const getTopicLevelColor = (level: TopicLevel | undefined): string => {
  switch (level) {
    case TopicLevel.EASY:
      return "green";
    case TopicLevel.MEDIUM:
      return "orange";
    case TopicLevel.HARD:
      return "orangered";
    default:
      return "black";
  }
};

export const getLanguageLabel = (lang: Lang): string => {
  switch (lang) {
    case Lang.EN:
      return "English";
    case Lang.ES:
      return "Espanol";

    case Lang.FR:
      return "Francais";

    case Lang.IT:
      return "Italiano";
    default:
      return "";
  }
};

export const getLevelLabel = (level: TopicLevel): string => {
  switch (level) {
    case TopicLevel.EASY:
      return "Easy";
    case TopicLevel.MEDIUM:
      return "Medium";
    case TopicLevel.HARD:
      return "Hard";
    default:
      return "";
  }
};

export const isStrBlank = (input: string): boolean =>
  input.replace(/\s/g, "") === "";

export const reloadPage = (): void => {
  window.location.reload();
};

export const getLangUrl = (): Lang => {
  const lang = window.location.pathname.split("/")[1];
  return lang as Lang;
};
