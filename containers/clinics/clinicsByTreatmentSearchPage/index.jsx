import BeforeAndAfter from "@/components/clinics/clinicsByTreatmentSearchPage/BeforeAndAfterImages";
import BookimedCeoAssurance from "@/components/clinics/clinicsByTreatmentSearchPage/bookimed/bookimedCeo";
import HowBookimedHelps from "@/components/clinics/clinicsByTreatmentSearchPage/bookimed/bookimedHelp";
import BookimedEditorialPolicy from "@/components/clinics/clinicsByTreatmentSearchPage/bookimed/bookimedPolicy";
import BreadCrumbComponent from "@/globalElements/breadcrumb";
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
import IconFacebook from "@/public/assets/icons/FaceBook";
import IconInstagram from "@/public/assets/icons/Instagram";
import IconLinkedin from "@/public/assets/icons/LinkedIn";
import WhatsappIcon from "@/public/assets/icons/Whatsapp";
// GetFreeConsolation data start
const data = [
  { country: "Hair transplant in Poland", countryCode: "PL" },
  { country: "Hair transplant in Germany", countryCode: "DE" },
  { country: "Hair transplant in Spain", countryCode: "ES" },
  { country: "Hair transplant in Republic of Korea", countryCode: "KR" },
  { country: "Hair transplant in Mexico", countryCode: "MX" },
  { country: "Hair transplant in Thailand", countryCode: "TH" },
  { country: "Hair transplant in Turkey", countryCode: "TR" },
];

const socialMedia = [
  { Img: IconInstagram, id: 1 },
  { Img: IconFacebook, id: 2 },
  { Img: IconLinkedin, id: 3 },
  { Img: WhatsappIcon, id: 4 },
];
// GetFreeConsolation data end


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
      <GetFreeConsolation data={data} socialMedia={socialMedia} />
    </>
  );
}
