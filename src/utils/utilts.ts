import { Lang, Question, TopicLevel } from "@/interfaces/interfaces";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts.js";

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

export const downloadPDF = (title: string, questions: Question[]): void => {
  if (pdfMake.vfs == undefined) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }
  const docDefinition = {
    content: [
      {
        columns: [
          [
            { text: title.toUpperCase(), style: "header" },
            {
              ol: questions.map((q) => ({ text: q.title, style: "question" })),
            },
          ],
        ],
      },
    ],
    styles: {
      header: {
        bold: true,
        fontSize: 16,
        alignment: "center",
        margin: [0, 0, 0, 50],
      },
      question: {
        fontSize: 14,
        alignment: "left",
        margin: [0, 0, 0, 10],
      },
    },
    pageSize: "A4",
    pageOrientation: "portrait",
  };
  pdfMake.createPdf(docDefinition as any).download(title + ".pdf");
};
