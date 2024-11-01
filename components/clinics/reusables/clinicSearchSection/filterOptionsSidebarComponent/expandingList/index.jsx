"use client";
import { useState } from "react";
import { MotionDiv } from "@/globalElements/motion";

export default function ExpandingList({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isShowMore, setIsShowMore] = useState(false);
  const data = [...Array(50)];
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const selectHandler = (e) => {
    if (e.currentTarget.textContent == "") {
      e.currentTarget.textContent = "✔";
      e.currentTarget.classList.add("border-primary");
    } else {
      e.currentTarget.textContent = "";
      e.currentTarget.classList.remove("border-primary");
    }
  };

  return (
    <div className="">
      <button
        className="flex  text-sm py-1 px-5  hover:bg-gray-200   items-center justify-between w-full"
        onClick={toggleExpanded}
      >
        <p>{title}</p>
        <span>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // added the transition if you don't mind, else you can delete it
            className={`transition-all duration-200 ${
              isExpanded && "rotate-[-90deg]"
            }`}
          >
            <path
              d="M12.5003 15.5013C12.2666 15.5017 12.0402 15.4204 11.8603 15.2713L5.8603 10.2713C5.43504 9.91781 5.37684 9.28653 5.7303 8.86128C6.08376 8.43602 6.71504 8.37781 7.1403 8.73128L12.5003 13.2113L17.8603 8.89128C18.0669 8.7235 18.3318 8.64501 18.5965 8.67316C18.8611 8.70131 19.1036 8.8338 19.2703 9.04128C19.4554 9.24913 19.5456 9.52475 19.519 9.80183C19.4924 10.0789 19.3516 10.3324 19.1303 10.5013L13.1303 15.3313C12.9452 15.4568 12.7234 15.5166 12.5003 15.5013Z"
              fill="#212B36"
            />
          </svg>
        </span>
      </button>
      {isExpanded && !children && (
        <>
          <ul className="px-5  max-h-[200px] overflow-x-hidden overflow-y-scroll">
            {data
              .slice(0, isShowMore ? data.length : 5)
              .map((element, index) => {
                return (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`flex my-2 h-6   `}
                    transition={{ delay: 0.05 * index }}
                  >
                    <div
                      onClick={selectHandler}
                      className="!h-6 mr-2 !w-6 border-2 rounded-md border-[#637381] text-primary select-none cursor-pointer flex items-center justify-center  "
                    ></div>{" "}
                    item
                  </MotionDiv>
                );
              })}
          </ul>
          <button
            onClick={(e) => {
              setIsShowMore(!isShowMore);
            }}
            className={`flex hover:underline px-5 my-2 text-primary  font-semibold text-sm animate-fadeIn  `}
          >
            {isShowMore ? "show less" : "show more"}
          </button>
        </>
      )}
      {isExpanded && children && <>{children}</>}
    </div>
  );
}
