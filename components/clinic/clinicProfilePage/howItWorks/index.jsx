import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import CardComponent from "@/globalElements/Card";
import { MotionDiv } from "@/globalElements/motion";

const data = {
  title: "How it Works:",
  texts: [
    {
      text: "We find a medical coordinator familiar with the matter",
    },
    {
      text: "You get a personal offer with a step-by-step guide and the cost estimate",
    },
    {
      text: "We arrange your travel including appointment scheduling and flights booking",
    },
    {
      text: "You arrive at the hospital, we support you 24/7",
    },
  ],
};

const HowItWorks = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-4 mt-8 mb-8">
        <h2 className="text-[#04285C] font-poppins text-base font-medium leading-5  ">
          {" "}
          {data.title}{" "}
        </h2>
        <ul className="list-disc">
          {data.texts.map((item, textIndex) => (
            <li
              key={textIndex}
              className="font-poppins text-sm font-normal leading-5 text-[#04285C] "
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <hr className="mb-8"></hr>
    </>
  );
};

export default HowItWorks;
