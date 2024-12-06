"use client";
import BreadCrumbComponent from "@/globalElements/breadcrumb";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Image from "next/image";
import ContentBlock from "@/components/blog/blogHomePage/ContentBlock";
import HeroImage from "@/components/blog/blogHomePage/HeroImage";

export default function BlogHomePageContainer() {
  return (
    <>
      <BreadCrumbComponent />
      <ExtraLargePageContainer>
        <div className="max-w-[1200px] h-full">
          <HeroImage />
          <ContentBlock />
        </div>
      </ExtraLargePageContainer>
    </>
  );
}
