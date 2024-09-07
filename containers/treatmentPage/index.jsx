import BeforeAndAfter from "@/components/treatments/BeforeAndAfterImages";
import BreadCrumbComponent from "@/components/treatments/breadCrumbComponent";
import DiscoverMore from "@/components/treatments/discoverMore";
import PageHeading from "@/components/treatments/pageHeading";
import TreatmentCosts from "@/components/treatments/treatmentCosts";
import TreatmentFilteringComponent from "@/components/treatments/treatmentFilteringComponent";
import TreatmentOverview from "@/components/treatments/treatmentOverview";
import TreatmentQuestionBandComponent from "@/components/treatments/treatmentQuestionBandComponent";

export default function TreatmentPageContainer() {
  return (
    <div className="xl:container px-4">
      <BreadCrumbComponent />
      <PageHeading />
      <TreatmentOverview />
      <TreatmentCosts />
      <TreatmentFilteringComponent />
      <TreatmentQuestionBandComponent />

      <BeforeAndAfter />
      <DiscoverMore />
    </div>
  );
}
