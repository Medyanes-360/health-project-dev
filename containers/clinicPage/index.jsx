import BreadCrumbComponent from "../../components/clinic/breadCrumbComponent";
import BeforeAfterComponent from "@/components/clinic/beforeAfterComponent";
import ProgramDetailsComponent from "@/components/clinic/programDetailsComponent";
import PatientReviewsSection from "@/components/clinic/patientReviewsSection";
import LocationSection from "@/components/clinic/locationSection";
import FaqSection from "@/components/clinic/faqSection";
import YouMightAlsoLikeSection from "@/components/clinic/youMightAlsoLikeSection";
import ProgramBenefits from "@/components/clinic/programBenefits";
import HowItWorks from "@/components/clinic/howItWorks";
import { clinicPageMockData } from "@/data/mocks/clinicPageMockData";

export default function ClinicPageContainer() {
  const data = clinicPageMockData;
  return (
    <div>
      <BreadCrumbComponent />
      <BeforeAfterComponent />
      <ProgramDetailsComponent />
      <ProgramBenefits data={data} />
      <HowItWorks data={data} />
      {/* Fırat */}
      <PatientReviewsSection />
      <LocationSection />
      <FaqSection />
      <YouMightAlsoLikeSection />
    </div>
  );
}
