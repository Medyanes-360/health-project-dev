"use client";
import { useState } from "react";
import CardComponent from "@/globalElements/Card";
import ExpandingQuestions from "./expand";

const Faqs = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="">
      <CardComponent>
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
      </CardComponent>
    </div>
  );
};

export default Faqs;
