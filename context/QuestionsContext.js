import { createContext } from "react";

const QuestionState = {
  answers: {},
  setAnswers: () => {},
};

const QuestionsContext = createContext(QuestionState);

export default QuestionsContext;
