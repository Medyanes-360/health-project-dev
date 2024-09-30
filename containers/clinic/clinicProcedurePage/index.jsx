import BeforeAndAfter from "@/components/clinic/clinicProcedurePage/beforeAfterComponent";
import BreadCrumbComponent from "@/components/clinic/clinicProcedurePage/breadCrumbComponent";
import ClinicBanner from "@/components/clinic/clinicProcedurePage/clinicBanner";
import FaqSection from "@/components/clinic/clinicProcedurePage/faqSection";
import FreeConsultationBandComponent from "@/components/clinic/clinicProcedurePage/freeConsultationBandComponent";
import HowItWorks from "@/components/clinic/clinicProcedurePage/howItWorks";
import LocationSection from "@/components/clinic/clinicProcedurePage/locationSection";
import PatientReviewsSection from "@/components/clinic/clinicProcedurePage/patientReviewsSection";
import ProcedureOverview from "@/components/clinic/clinicProcedurePage/procedureOverview";
import ProcedureSpecialist from "@/components/clinic/clinicProcedurePage/procedureSpecialist";
import ProgramBenefits from "@/components/clinic/clinicProcedurePage/programBenefits";
import ProgramDetails from "@/components/clinic/clinicProcedurePage/programDetailsComponent";
import YouMightAlsoLikeSection from "@/components/clinic/clinicProcedurePage/youMightAlsoLikeSection";
import { clinicPageMockData } from "@/data/mocks/clinicPageMockData";

export default function ClinicProcedurePageContainer({ clinic }) {
  const reviews = clinic.patientReviews;
  const address = clinic.location.fullAddress;
  const faqs = clinic.faqs;
  const data = clinicPageMockData;

  return (
    <div>
      <BreadCrumbComponent />
      <ClinicBanner />
      <ProcedureOverview />
      <FreeConsultationBandComponent />
      <ProcedureSpecialist />
      <BeforeAndAfter />
      <ProgramDetails />
      <ProgramBenefits data={data} />
      <HowItWorks data={data} />
      {/* Fırat */}
      <PatientReviewsSection reviews={reviews} />
      <LocationSection address={address} />
      <FaqSection data={faqs} />
      <YouMightAlsoLikeSection />
    </div>
  );
}
