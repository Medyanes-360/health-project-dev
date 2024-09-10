import BeforeAndAfter from "@/components/treatments/beforeAndAfterImages";
import BookimedCeoAssurance from "@/components/treatments/bookimed/bookimedCeo";
import HowBookimedHelps from "@/components/treatments/bookimed/bookimedHelp";
import BookimedEditorialPolicy from "@/components/treatments/bookimed/bookimedPolicy";
import BreadCrumbComponent from "@/components/treatments/breadCrumbComponent";
import DiscoverBestClinicsSection from "@/components/treatments/discoverBestClinicsSection";
import DiscoverMore from "@/components/treatments/discoverMore";
import Faqs from "@/components/treatments/faqs";
import HairTransplantReviews from "@/components/treatments/hairTransplantReviews";
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
    <>
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
      </div>
      <div>
        <BeforeAndAfter />
        <DiscoverMore />
        <MedicalAssessment />
        <RelatedArticles />
        <Faqs />
        <HairTransplantReviews />
        <BookimedEditorialPolicy />
        <BookimedCeoAssurance />
        <HowBookimedHelps />
      </div>
    </>
  );
}
