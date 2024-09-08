import BeforeAndAfter from "@/components/treatments/beforeAndAfterImages";
import BreadCrumbComponent from "@/components/treatments/breadCrumbComponent";
import DiscoverBestClinicsSection from "@/components/treatments/discoverBestClinicsSection";
import DiscoverMore from "@/components/treatments/discoverMore";
import HottestPackagesSection from "@/components/treatments/hottestPackagesSection";
import MedicalAssessment from "@/components/treatments/medicalAssessment";
import PageHeading from "@/components/treatments/pageHeading";
import RecentHairTransplantReview from "@/components/treatments/recentHairTransplantReview";
import RelatedArticles from "@/components/treatments/relatedArtcles";
import TreatmentCostsSection from "@/components/treatments/treatmentCostsSection";
import TreatmentFilteringSection from "@/components/treatments/treatmentFilteringSection";
import TreatmentOverviewSection from "@/components/treatments/treatmentOverviewSection";
import TreatmentQuestionBandComponent from "@/components/treatments/treatmentQuestionBandComponent";

export default function TreatmentPageContainer() {
  return (
    <div className="xl:container mx-auto px-4">
      <BreadCrumbComponent />
      <PageHeading />
      <TreatmentOverviewSection />
      <TreatmentCostsSection />
      <TreatmentFilteringSection />
      <TreatmentQuestionBandComponent />
      <RecentHairTransplantReview />
      <HottestPackagesSection />
      <DiscoverBestClinicsSection />

      <BeforeAndAfter />
      <DiscoverMore />
      <MedicalAssessment />
      <RelatedArticles />
    </div>
  );
}
