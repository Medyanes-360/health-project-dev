"use client";
import { useState } from "react";
import DepartmentCard from "./departmentCard";
import FeatureCard from "./featureCard";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import { featureCardMockData } from "@/data/mocks/featureCardMockData";

const MostPopularVacanciesSection = () => {
  const data = featureCardMockData;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section>
      {/* component'ın max-widthini xl'a ayarlayan container:  */}
      <ExtraLargePageContainer className=" ">
        <div className="   border-primary grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 mt-5  ">
          {data.slice(0, 4).map((feature, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                }}
              >
                <FeatureCard active={activeIndex == index} data={feature} />
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ">
          {data[activeIndex].subcategories
            .slice(0, 6)
            .map((category, index) => {
              return <DepartmentCard key={index} data={category} />;
            })}

          {data[activeIndex].subcategories
            .slice(6, 10)
            .map((category, index) => {
              return (
                <DepartmentCard
                  className="
                 hidden md:block"
                  key={index}
                  data={category}
                />
              );
            })}

          {data[activeIndex].subcategories
            .slice(10, 12)
            .map((category, index) => {
              return (
                <DepartmentCard
                  className="
                 hidden lg:block"
                  key={index}
                  data={category}
                />
              );
            })}
        </div>
      </ExtraLargePageContainer>
    </section>
  );
};
export default MostPopularVacanciesSection;
