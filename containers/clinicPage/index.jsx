import BreadCrumbComponent from "../../components/clinic/breadCrumbComponent";
import BeforeAfterComponent from "@/components/clinic/beforeAfterComponent";
import ProgramDetailsComponent from "@/components/clinic/programDetailsComponent";
import PatientReviewsSection from "@/components/clinic/patientReviewsSection";
import LocationSection from "@/components/clinic/locationSection";
import FaqSection from "@/components/clinic/faqSection";
import YouMightAlsoLikeSection from "@/components/clinic/youMightAlsoLikeSection";

export default function ClinicPageContainer() {
  return (
    <div>
      <BreadCrumbComponent />
      <BeforeAfterComponent />
      <ProgramDetailsComponent />

      {/* Fırat */}
      <PatientReviewsSection />
      <LocationSection />
      <FaqSection />
      <YouMightAlsoLikeSection />
    </div>
  );
}
