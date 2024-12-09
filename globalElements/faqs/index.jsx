"use client";
import { useState } from "react";
//import CardComponent from "@/globalElements/Card";
import ExpandingQuestions from "./expand";

const Faqs = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="">
      <div className="card">
        <div className="card-children">
          {data?.map(({ description, title }, i) => (
            <ExpandingQuestions
              key={i}
              index={i}
              title={title}
              description={description}
              isExpanded={expandedIndex === i}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
