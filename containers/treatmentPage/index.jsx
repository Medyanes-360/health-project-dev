import PageHeading from "@/components/treatments/pageHeading";
import TreatmentCosts from "@/components/treatments/treatmentCosts";
import TreatmentFilteringComponent from "@/components/treatments/treatmentFilteringComponent";
import TreatmentOverview from "@/components/treatments/treatmentOverview";
import TreatmentQuestionBandComponent from "@/components/treatments/treatmentQuestionBandComponent";

export default function TreatmentPageContainer() {
  return (
    <div className="xl:container px-4">
      <PageHeading />
      <TreatmentOverview />
      <TreatmentCosts />
      <TreatmentFilteringComponent />
      <TreatmentQuestionBandComponent />
    </div>
  );
}
