"use client";
import BreadCrumbComponent from "@/globalElements/breadcrumb";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Image from "next/image";
import ContentBlock from "@/components/blog/blogHomePage/ContentBlock";
import HeroImage from "@/components/blog/blogHomePage/HeroImage";
import AveragePrice from "@/components/blog/blogHomePage/AveragePrice";

export default function BlogHomePageContainer() {
  return (
    <>
      <BreadCrumbComponent />
      <ExtraLargePageContainer>
        <div className="max-w-[1200px] h-full my-[18px] md:my-[60px] flex flex-col gap-8">
          <HeroImage />
          <ContentBlock />
          <AveragePrice />
        </div>
      </ExtraLargePageContainer>
    </>
  );
}
