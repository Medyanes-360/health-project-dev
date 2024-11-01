import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import PackageCard from "./packageCard";

export default function HottestPackagesSection() {
  return (
    <ExtraLargePageContainer>
      {/* Heading: */}
      <div className="flex mt-6 mb-11     items-center">
        <h1 className="text-xl font-bold">
          Discover the Hottest Hair transplant Packages of the Season
        </h1>
      </div>
      <div className="flex gap-3  items-center justify-center ">
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </div>
    </ExtraLargePageContainer>
  );
}
