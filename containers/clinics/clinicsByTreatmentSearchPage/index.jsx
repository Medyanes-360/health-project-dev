import BeforeAndAfter from "@/components/clinics/clinicsByTreatmentSearchPage/BeforeAndAfterImages";
import BookimedCeoAssurance from "@/components/clinics/clinicsByTreatmentSearchPage/bookimed/bookimedCeo";
import HowBookimedHelps from "@/components/clinics/clinicsByTreatmentSearchPage/bookimed/bookimedHelp";
import BookimedEditorialPolicy from "@/components/clinics/clinicsByTreatmentSearchPage/bookimed/bookimedPolicy";
import BreadCrumbComponent from "@/components/clinics/clinicsByTreatmentSearchPage/breadCrumbComponent";
import DiscoverBestClinicsSection from "@/components/clinics/clinicsByTreatmentSearchPage/discoverBestClinicsSection";
import DiscoverMore from "@/components/clinics/clinicsByTreatmentSearchPage/discoverMore";
import FaqSection from "@/components/clinics/clinicsByTreatmentSearchPage/faqSection";
import GetFreeConsolation from "@/components/clinics/clinicsByTreatmentSearchPage/freeConsultationForm";
import HairTransplantReviews from "@/components/clinics/clinicsByTreatmentSearchPage/hairTransplantReviews";
import HottestPackagesSection from "@/components/clinics/clinicsByTreatmentSearchPage/hottestPackagesSection";
import MedicalAssessment from "@/components/clinics/clinicsByTreatmentSearchPage/medicalAssessment";
import PageHeading from "@/components/clinics/clinicsByTreatmentSearchPage/pageHeading";
import RecentHairTransplantReview from "@/components/clinics/clinicsByTreatmentSearchPage/recentHairTransplantReview";
import RelatedArticles from "@/components/clinics/clinicsByTreatmentSearchPage/relatedArtcles";
import TreatmentCostsSection from "@/components/clinics/clinicsByTreatmentSearchPage/treatmentCostsSection";
import ClinicSearchSection from "@/components/clinics/reusables/clinicSearchSection";
import TreatmentOverviewSection from "@/components/clinics/clinicsByTreatmentSearchPage/treatmentOverviewSection";
import TreatmentQuestionBandComponent from "@/components/clinics/clinicsByTreatmentSearchPage/treatmentQuestionBandComponent";

export default function ClinicsByTreatmentSearchPageContainer({ treatment }) {
  return (
    <>
      {" "}
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
      <ClinicSearchSection />
      <TreatmentQuestionBandComponent data={treatment.bandTestQuestion} />
      <RecentHairTransplantReview />
      <HottestPackagesSection />
      <DiscoverBestClinicsSection />
      <BeforeAndAfter />
      <DiscoverMore />
      <MedicalAssessment />
      <RelatedArticles />
      <FaqSection />
      <HairTransplantReviews />
      <BookimedEditorialPolicy />
      <BookimedCeoAssurance />
      <HowBookimedHelps />
      <GetFreeConsolation />
    </>
  );
}
