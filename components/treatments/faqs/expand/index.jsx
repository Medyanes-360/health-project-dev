"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function ExpandingQuestions({ title, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="my-1 flex items-center justify-between gap-5 w-full ">
      <div className="flex-1">
        <button
          className="flex  cursor-pointer items-center justify-between w-full"
          onClick={toggleExpanded}
        >
          <div
            className={cn("w-full px-2 py-3 rounded-t-xl", isExpanded ? "bg-primary" : "")}
          >
            <h1
              className={cn(
                "font-medium text-start",
                isExpanded ? "text-white" : "text-secondary"
              )}
            >
              {title}
            </h1>
          </div>
        </button>

        {isExpanded && (
          <div
            className={cn(
              "px-2 pb-3 animate-fadeIn rounded-b-xl",
              isExpanded ? "bg-primary/30" : ""
            )}
          >
            <p className="font-light">{description}</p>
          </div>
        )}
      </div>
      <span
        className={cn(
          "transition-all duration-200 w-fit text-2xl ",
          isExpanded ? "rotate-[45deg]" : ""
        )}
      >
        +
      </span>
    </div>
  );
}
