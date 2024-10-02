"use client";
import { useState } from "react";
import DepartmentCard from "./departmentCard";
import FeatureCard from "./featureCard";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import { featureCardMockData } from "@/data/mocks/featureCardMockData";
import { MotionDiv } from "@/globalElements/motion";

const MostPopularVacanciesSection = () => {
  const data = featureCardMockData;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      {/* component'ın max-widthini xl'a ayarlayan container:  */}
      <ExtraLargePageContainer>
        <div className=" mt-20 mb-20 ">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="   border-primary grid grid-cols-2 lg:grid-cols-4  gap-3 lg:gap-6 mt-5  ">
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

            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ">
              {data[activeIndex].subcategories
                .slice(0, 6)
                .map((category, index) => {
                  return (
                    <DepartmentCard
                      className={""}
                      index={index}
                      key={index}
                      data={category}
                    />
                  );
                })}

              {data[activeIndex].subcategories
                .slice(6, 10)
                .map((category, index) => {
                  return (
                    <DepartmentCard
                      className="
                 hidden md:block  "
                      index={index + 6}
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
                 hidden lg:block "
                      index={index + 10}
                      key={index}
                      data={category}
                    />
                  );
                })}
            </div>
          </MotionDiv>
        </div>
      </ExtraLargePageContainer>
    </section>
  );
};
export default MostPopularVacanciesSection;
