import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Image from "next/image";
import React from "react";

const CheapVeneers = () => {
  return (
    <ExtraLargePageContainer className={"!py-20 "}>
      <div className="min-h-[50vh] w-full relative grid place-content-center ">
        <Image
          src={"/assets/images/money.jpg"}
          fill
          alt="money"
          className="rounded-2xl object-cover object-center"
        />

        <div className="bg-gradient-to-l from-[#F5FFD6] to-[rgba(224,235,191,0)] absolute inset-0 w-full h-full rounded-2xl" />

        <div className="relative w-fit space-y-4 sm:px-10 px-4 py-20">
          <h1 className="sm:text-2xl text-xl font-bold">
            Top 7 destinations to get cheap veneers abroad
          </h1>

          <p className="text-base sm:text-lg">
            Where to find the cheap veneers is the most frequently asked
            question for thousands of people with dental issues. Keep reading
            and find out the 7 most budget-friendly places worldwide to make
            your smile perfect.
          </p>
        </div>
      </div>
    </ExtraLargePageContainer>
  );
};

export default CheapVeneers;
