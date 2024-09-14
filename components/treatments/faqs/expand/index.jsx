"use client";
import { useState } from "react";

export default function ExpandingQuestions({ title, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="my-1 flex justify-between gap-5 w-full ">
      <div className="flex-1">
        <button
          className={`flex  cursor-pointer items-center justify-between w-full  transition-all duration-200 rounded-t-2xl ${
            isExpanded ? "bg-primary" : ""
          }`}
          onClick={toggleExpanded}
        >
          <div
            className={`
              "w-full px-2 py-3 rounded-t-xl ",
              `}
          >
            <h1
              className={`
                "font-medium text-start w-full",
                ${isExpanded ? "text-white" : "text-secondary"}
              `}
            >
              {title}
            </h1>
          </div>
        </button>

        {isExpanded && (
          <div
            className={`
              " pb-3 animate-fadeIn px-2 rounded-b-xl transition-all duration-200",
              ${isExpanded ? "bg-primary/30" : ""}
            `}
          >
            <p className="font-light ">{description}</p>
          </div>
        )}
      </div>
      <div className="w-8 h-8 flex items-center justify-center">
        <span
          className={`
            "transition-all duration-200 text-2xl ",
            ${isExpanded ? "rotate-[45deg]" : ""}
          `}
        >
          +
        </span>
      </div>
    </div>
  );
}
