import PackageCard from "@/components/clinics/clinicsByTreatmentSearchPage/hottestPackagesSection/packageCard";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import Link from "next/link";

export default function PopularClinics() {
  return (
    <ExtraLargePageContainer>
      {/* Heading: */}
      <div className="flex mt-6 mb-11 items-center">
        <h1 className="text-xl font-bold">Popular Clinics</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </div>
      <div className="w-full flex justify-center md:justify-end py-8">
        <Link href={"/clinics"} className="text-xl font-bold">
          See All Clinics
        </Link>
      </div>
    </ExtraLargePageContainer>
  );
}
