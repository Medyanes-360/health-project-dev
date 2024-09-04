"use client";
import QuestionsContext from "@/context/QuestionsContext";
import { useContext } from "react";

const QuestionCard = ({ question, id }) => {
  const { answers, setAnswers } = useContext(QuestionsContext);
  const s = `answer${id}`;
  const handleOptionChange = (event) => {
    setAnswers((prev) => ({ ...prev, [s]: event.target.value }));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-16 px-6">
      <div className="text-center space-y-3">
        <p className="text-primary-dark">
          Minute Health Survey for a Free Quote
        </p>
        <h1 className="text-2xl font-bold">{question}</h1>
      </div>
      <div className="space-y-1 w-full">
        <div className="w-full h-[40px] border border-third px-4 py-2 flex gap-5">
          <input
            onChange={handleOptionChange}
            name={id}
            type="radio"
            value={"Yes"}
            defaultChecked={answers[s] === "Yes"}
          />
          <label>Yes</label>
        </div>
        <div className="w-full h-[40px] border border-third px-4 py-2 flex gap-5">
          <input
            onChange={handleOptionChange}
            name={id}
            type="radio"
            value={"No"}
            defaultChecked={answers[s] === "No"}
          />
          <label>No</label>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
