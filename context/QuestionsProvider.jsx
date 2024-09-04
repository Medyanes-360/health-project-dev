"use client";
import { useState } from "react";
import QuestionsContext from "./QuestionsContext";
const QuestionsProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});

  const ContextValue = {
    answers,
    setAnswers,
  };

  return (
    <QuestionsContext.Provider value={ContextValue}>
        {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsProvider;
