"use client";
import { MotionDiv } from "@/globalElements/motion";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function ExpandingQuestions({ title, description, index }) {
  const [isExpanded, setIsExpanded] = useState(index == 0 ? true : false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="my-1 flex justify-between gap-5 w-full">
      <div className="flex-1">
        <button
          className={`flex cursor-pointer items-center justify-between w-full transition-all duration-200 rounded-t-2xl ${
            isExpanded ? "bg-primary" : ""
          }`}
          onClick={toggleExpanded}
        >
          <MotionDiv
            initial={{
              y: "30px",
              opacity: 0,
            }}
            whileInView={{
              y: "0px",
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            className={`w-full px-2 py-3 rounded-t-xl flex-1`}
          >
            <h1
              className={`font-medium text-start w-full px-5 ${
                isExpanded ? "text-white" : "text-secondary"
              }`}
            >
              {title}
            </h1>
          </MotionDiv>

          <div
            className={`px-5 text-4xl font-light transition-all duration-200 ${
              isExpanded ? "!rotate-[45deg] text-white-dark" : "text-third"
            }`}
          >
            +
          </div>
        </button>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: "-30px", height:'min-content' }}
              animate={{ opacity: 1, y: "0", height:'max-content' }}
              exit={{ opacity: 0, y: "-100px", height:'min-content' }}
              transition={{ duration: 0.5, ease:"easeInOut" }}
              className={` pb-3 rounded-b-xl transition-all duration-200 px-2 py-3 ${
                isExpanded ? "bg-primary/30" : ""
              }`}
            >
              <p className="font-light px-5">{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
