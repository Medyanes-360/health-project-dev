"use client";
import useQuestionStore from "@/utils/questionStore";

const QuestionCard = ({ question, id }) => {
  const { answers, setAnswers } = useQuestionStore(); // Use Zustand store
  const s = `answer${id}`;

  const handleOptionChange = (event) => {
    setAnswers({ [s]: event.target.value });
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
        <div className="w-full h-[40px] border px-4 py-2 flex gap-5">
          <input
            onChange={handleOptionChange}
            name={id}
            type="radio"
            value="Yes"
            defaultChecked={answers[s] === "Yes"}
            className="w-4"
          />
          <label className="text-third">Yes</label>
        </div>
        <div className="w-full h-[40px] border px-4 py-2 flex gap-5">
          <input
            onChange={handleOptionChange}
            name={id}
            type="radio"
            value="No"
            defaultChecked={answers[s] === "No"}
            className="w-4"

          />
          <label className="text-third">No</label>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
