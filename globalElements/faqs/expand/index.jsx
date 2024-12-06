"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function ExpandingQuestions({
  title,
  description,
  index,
  isExpanded,
  onToggle,
}) {
  return (
    <div className="my-1 flex justify-between gap-5 w-full ">
      <div className="flex-1">
        {/* Title Button */}
        <button
          className={`flex cursor-pointer items-center justify-between w-full transition-all duration-200 rounded-t-2xl ${
            isExpanded ? "bg-primary" : ""
          }`}
          onClick={() => onToggle(index)} // Trigger the toggle in parent
        >
          <div className="w-full px-2 py-3 rounded-t-xl flex-1">
            <h1
              className={`font-medium text-start w-full px-5 ${
                isExpanded ? "text-white" : "text-secondary"
              }`}
            >
              {title}
            </h1>
          </div>

          <div
            className={`px-5 text-4xl font-light transition-all duration-200 ${
              isExpanded ? "rotate-[45deg] text-white-dark" : "text-third"
            }`}
          >
            +
          </div>
        </button>

        {/* Animated Description */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div
                className={`pb-3 rounded-b-xl transition-all duration-200 px-2 py-3 ${
                  isExpanded ? "bg-primary/30" : ""
                }`}
              >
                <p className="font-light px-5">{description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
