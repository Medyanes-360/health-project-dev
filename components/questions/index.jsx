"use client";
import CardComponent from "@/globalElements/Card";
import QuestionCard from "./QuestionCard";
import { useContext, useState } from "react";
import { cn } from "@/lib/utils";
import QuestionsContext from "@/context/QuestionsContext";
import { useRouter } from "next/navigation";

// data. must have id starts with 1

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
  const { answers } = useContext(QuestionsContext);
  // storing the answers in a global context state

  const [currentQuestion, setCurrentQuestion] = useState(1);
  // to toggle between pages

  const [error, setError] = useState(false);
  // to show error if needed

  const nextQuestionHandler = () => {
    const s = `answer${currentQuestion}`;
    // to store the answer in an object
    // the object name will be called
    //answer[number] and this number is the id
    // ex: answer2:Yes, answer4:No

    if (questions[currentQuestion - 1].required) {
      if (answers[s] == undefined || answers[s] == null) {
        setError(true);
        return;
      }
      // check if required and not answered
    }

    if (currentQuestion == questions.length) {
      router.push("/");
      return;
      // check if the last question
    }

    setError(false);
    setCurrentQuestion((prev) => prev + 1);
  };
  const prevQuestionHandler = () => {
    setError(false);
    setCurrentQuestion((prev) => prev - 1);

    // previous question
  };

  return (
    <div className="w-full min-h-screen bg-white-dark grid place-content-center">
      <div className="xl:container space-y-4 px-4">
        <CardComponent className={" sm:max-w-[500px] mx-auto bg-fourth py-14 "}>
            {/* using the component cad */}
          {questions.map((question) => {
            //maping theou questions
            if (currentQuestion == question.id) {
                // if the current question does not have the same id, it wont be shown
              return (
                <QuestionCard
                  question={question.q}
                  key={question.id}
                  id={question.id}
                />
              );
            }
          })}
 
          <div className="px-6 flex gap-2 items-center">
            {questions.map((q) => {
                // working on the progress bars based on the questions length
              if (q.id == questions.length) return;

              const value = currentQuestion > q.id;
              const progress = value ? 100 : 0;

              return (
                <progress
                  value={progress}
                  className="mx-auto w-full bg-primary transition-all duration-500 "
                />
              );
            })}
          </div>

          <div className="flex w-full items-center px-6">
            <div className="flex-1">
              <div
                className={cn(
                  "w-fit py-2 px-3 border border-white-dark cursor-pointer mr-auto",
                  currentQuestion == 1 && "hidden"
                )}
                onClick={prevQuestionHandler}
                // go back
              >
                Go Back
              </div>
            </div>
            <div className="flex-1">
              <div
                className={cn(
                  "w-fit py-2 px-3 border border-white-dark bg-primary cursor-pointer ml-auto"
                )}
                onClick={nextQuestionHandler}
              >
                {questions.length == currentQuestion
                  ? "Finish"
                  : "Move Forward"}
                  {/* move forward of finish */}
              </div>
            </div>
          </div>
          {error && (
            // error
            <p className="text-center text-red-500 px-6">
              *This Question is Needed
            </p>
          )}
        </CardComponent>
      </div>

      {/* just to make sure everything working just fine */}

      <div className="w-[500px] flex justify-center gap-3 flex-nowrap mt-4">
        <pre className="bg-gray-100 p-4 rounded border border-gray-300">
          {JSON.stringify(answers, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default QuestionsSection;
