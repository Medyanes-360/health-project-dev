import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import CardComponent from "@/globalElements/Card";
import { MotionDiv } from "@/globalElements/motion";
import React from "react";

const data = [
  {
    id: 1,
    title: "Trip Planning",
    description:
      "You submit a request on the website and we discuss the time and details of your visit to the clinic. The doctor remotely evaluates your chances to get a desired result.",
  },
  {
    id: 2,
    title: "Arriving at the Medical Center",
    description:
      "You submit a request, and we discuss your visit details. The doctor then remotely assesses your chances of achieving the desired result.",
  },
  {
    id: 3,
    title: "Before the Procedure",
    description:
      "You will pass some laboratory tests on the day before the operation",
  },
  {
    id: 4,
    title: "During Procedures",
    description:
      "The doctor performs hair transplants under local or general anesthesia, lasting 2-8 hours depending on the method and number of grafts.",
  },
  {
    id: 5,
    title: "Postoperative Recovery",
    description:
      "There is no rehabilitation period after a hair transplant, but you must follow simple guidelines for sleeping, washing your hair, and touching your head.",
  },
];

const HowItWorks = () => {
  return (
    <div className="pt-5">
      <ExtraLargePageContainer>
        <CardComponent>
          <h1 className=" font-poppins font-semibold  text-xl text-primary">
            How it works
          </h1>

          <div className="grid grid-cols-5  gap-4 ">
            {data.map((items, i) => (
              <MotionDiv
                initial={{
                  y: "50px",
                  opacity: 0,
                }}
                whileInView={{
                  y: "0px",
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * (i + 1),
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                key={i}
              >
                <ContentCard data={items} index={i} />
              </MotionDiv>
            ))}
          </div>
        </CardComponent>
      </ExtraLargePageContainer>
    </div>
  );
};

export default HowItWorks;

const ContentCard = ({ data, index }) => {
  const { description, title } = data;

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden min-h-[296px] min-w-[217.6px]">
      {/* Başlık kısmını kapsayan bölge */}
      <div className="relative   bg-white-disabled" style={{ height: "108px" }}>
        {/* Arka plan alanı için kapsayıcı */}

        {/* Sayı ve başlığı kapsayan bölge */}
        <div className="relative flex flex-col items-start">
          {/* Sayılar başlığın üstünde olacak şekilde konumlandırılır */}
          <div className="flex font-poppins text-black h-[24px] mb-2 p-2">
            {index + 1}/5
          </div>
          <div className="flex font-poppins text-primary h-[16px] p-2">
            <p>{title}</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className=" font-poppins text-sm">{description}</p>
      </div>
    </div>
  );
};
