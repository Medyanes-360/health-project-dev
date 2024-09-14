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
          2 Minutes Health Survey for a Free Quote
        </p>
        <h1 className="text-2xl font-bold">{question}</h1>
        {/*  the question */}
      </div>
      <div className="space-y-1 w-full">
        <div className="w-full h-[40px] border px-4 py-2 flex gap-5">
          <input
            onChange={handleOptionChange}
            name={id}
            type="radio"
            value={"Yes"}
            defaultChecked={answers[s] === "Yes"}
            // the value will be a yes string
          />
          <label>Yes</label>
        </div>
        <div className="w-full h-[40px] border  px-4 py-2 flex gap-5">
          <input
            onChange={handleOptionChange}
            name={id}
            type="radio"
            value={"No"}
            defaultChecked={answers[s] === "No"}
            // the value will be a no string
          />
          <label>No</label>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
