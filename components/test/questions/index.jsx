"use client";
import CardComponent from "@/globalElements/Card";
import QuestionCard from "./QuestionCard";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useQuestionStore from "@/utils/questionStore";

const questions = [
  {
    q: "Are you interested in weight loss programs?",
    id: 1,
    required: false,
  },
  {
    q: "Do you experience frequent headaches or migraines?",
    id: 2,
    required: true,
  },
  {
    q: "Are you looking for skincare treatment options?",
    id: 3,
    required: true,
  },
  {
    q: "Would you like to know more about managing stress and anxiety?",
    id: 4,
    required: false,
  },
  {
    q: "Are you considering dental treatments or orthodontics?",
    id: 5,
    required: false,
  },
  {
    q: "Are you looking for information on improving your diet and nutrition?",
    id: 6,
    required: true,
  },
];

const QuestionsSection = () => {
  const router = useRouter();
  const { answers } = useQuestionStore(); // Use Zustand store
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [error, setError] = useState(false);

  const nextQuestionHandler = () => {
    const s = `answer${currentQuestion}`;
    if (questions[currentQuestion - 1].required) {
      if (answers[s] === undefined || answers[s] === null) {
        setError(true);
        return;
      }
    }

    if (currentQuestion == questions.length) {
      router.push("/");
      return;
    }

    setError(false);
    setCurrentQuestion((prev) => prev + 1);
  };

  const prevQuestionHandler = () => {
    setError(false);
    setCurrentQuestion((prev) => prev - 1);
  };

  return (
    <div className="w-full min-h-screen bg-white-dark grid place-content-center">
      <div className="xl:container space-y-4 px-4">
        <CardComponent
          className={" sm:max-w-[500px] !mx-auto !bg-fourth !py-14 "}
        >
          {questions.map((question) => {
            if (currentQuestion == question.id) {
              return (
                <QuestionCard
                  question={question.q}
                  key={question.id}
                  id={question.id}
                />
              );
            }
          })}
          {/* Progress Bar */}
          <div className="px-6 flex gap-2 items-center">
            {questions.map((q, i) => {
              if (q.id == 1) return null;
              return (
                <div
                  key={i}
                  className={`h-[10px] w-full rounded-r-md ${
                    currentQuestion >= q.id ? "bg-primary" : "bg-[#D9D9D9]"
                  }`}
                />
              );
            })}
          </div>

          <div className="flex w-full items-center px-6 justify-between">
            <div className="w-fit">
              {currentQuestion > 1 && (
                <div
                  className="w-fit py-2 px-3 border border-white-dark cursor-pointer mr-auto"
                  onClick={prevQuestionHandler}
                >
                  ← Go Back
                </div>
              )}
            </div>
            <div className="w-fit">
              <div
                className="w-fit py-2 px-3 border-white-dark bg-primary cursor-pointer ml-auto"
                onClick={nextQuestionHandler}
              >
                {questions.length == currentQuestion
                  ? "Finish"
                  : "Move Forward →"}
              </div>
            </div>
          </div>
          {error && (
            <p className="text-center text-red-500 px-6">
              *This Question is Needed
            </p>
          )}
        </CardComponent>
      </div>
      <div className="w-[500px] flex justify-center gap-3 flex-nowrap mt-4">
        <pre className="bg-gray-100 p-4 rounded border border-gray-300">
          {JSON.stringify(answers, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default QuestionsSection;
