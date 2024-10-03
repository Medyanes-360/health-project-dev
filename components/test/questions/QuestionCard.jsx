"use client";
import useQuestionStore from "@/utils/questionStore";

const QuestionCard = ({ question, id }) => {
  const { answers, setAnswers } = useQuestionStore(); // Use Zustand store
  const s = `answer${id}`;

  const handleOptionChange = (value) => {
    setAnswers({ [s]: value });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-16 px-6">
      <div className="text-center space-y-3">
        <p className="text-primary-dark">
          2 Minutes Health Survey for a Free Quote
        </p>
        <h1 className="text-xl font-semibold">{question}</h1>
      </div>
      <div className="space-y-1 w-full">
        <label
          className="w-full h-[40px] border px-4 py-2 flex gap-5 cursor-pointer"
          onClick={() => handleOptionChange("Yes")}
        >
          <input
            onChange={() => handleOptionChange("Yes")}
            name={id}
            type="radio"
            value="Yes"
            checked={answers[s] === "Yes"}
            className="w-4"
          />
          <span className="text-third">Yes</span>
        </label>
        <label
          className="w-full h-[40px] border px-4 py-2 flex gap-5 cursor-pointer"
          onClick={() => handleOptionChange("No")}
        >
          <input
            onChange={() => handleOptionChange("No")}
            name={id}
            type="radio"
            value="No"
            checked={answers[s] === "No"}
            className="w-4"
          />
          <span className="text-third">No</span>
        </label>
      </div>
    </div>
  );
};

export default QuestionCard;
