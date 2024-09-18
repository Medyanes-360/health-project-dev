import BeforeAndAfter from "@/components/treatments/beforeAndAfterImages";
import BookimedCeoAssurance from "@/components/treatments/bookimed/bookimedCeo";
import HowBookimedHelps from "@/components/treatments/bookimed/bookimedHelp";
import BookimedEditorialPolicy from "@/components/treatments/bookimed/bookimedPolicy";
import BreadCrumbComponent from "@/components/treatments/breadCrumbComponent";
import DiscoverBestClinicsSection from "@/components/treatments/discoverBestClinicsSection";
import DiscoverMore from "@/components/treatments/discoverMore";
import FaqSection from "@/components/treatments/faqSection";
import GetFreeConsolation from "@/components/treatments/freeConsultationForm";
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

export default function TreatmentPageContainer({ treatment }) {
  return (
    <>
      <BreadCrumbComponent />
      <PageHeading
        data={{
          title: treatment.title,
          lastUpdateDate: treatment.lastUpdateDate,
        }}
      />
      <TreatmentOverviewSection
        data={{ overview: treatment.overview, title: treatment.title }}
      />
      <TreatmentCostsSection
        data={{
          costsOverview: treatment.costsOverview,
          title: treatment.title,
        }}
      />
      <TreatmentFilteringSection />
      <TreatmentQuestionBandComponent data={treatment.bandTestQuestion} />
      <RecentHairTransplantReview />
      <HottestPackagesSection />
      <DiscoverBestClinicsSection />

      <BeforeAndAfter />
      <DiscoverMore />
      <MedicalAssessment />
      <RelatedArticles />
      <FaqSection/>
      <HairTransplantReviews />
      <BookimedEditorialPolicy />
      <BookimedCeoAssurance />
      <HowBookimedHelps />
      <GetFreeConsolation />
    </>
  );
}
