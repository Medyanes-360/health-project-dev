import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import { MotionDiv } from "@/globalElements/motion";
import Image from "next/image";
import React from "react";

const CheapVeneers = () => {
  return (
    <ExtraLargePageContainer className={"!py-20 "}>
      <MotionDiv
        initial={{
          scale: "110%",
          opacity: 0,
        }}
        whileInView={{
          scale: "100%",
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
        className="min-h-[50vh] w-full relative grid place-content-center "
      >
        <Image
          src={"/assets/images/money.jpg"}
          fill
          alt="money"
          className="rounded-2xl object-cover object-center"
        />

        <div className="bg-gradient-to-l from-[#F5FFD6] to-[rgba(224,235,191,0)] absolute inset-0 w-full h-full rounded-2xl" />

        <MotionDiv
          initial={{
            scale: "90%",
            opacity: 0,
          }}
          whileInView={{
            scale: "100%",
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          className="relative w-fit space-y-4 sm:px-10 px-4 py-20"
        >
          <h1 className="sm:text-2xl text-xl font-bold">
            Top 7 destinations to get cheap veneers abroad
          </h1>

          <p className="text-base sm:text-lg">
            Where to find the cheap veneers is the most frequently asked
            question for thousands of people with dental issues. Keep reading
            and find out the 7 most budget-friendly places worldwide to make
            your smile perfect.
          </p>
        </MotionDiv>
      </MotionDiv>
    </ExtraLargePageContainer>
  );
};

export default CheapVeneers;
