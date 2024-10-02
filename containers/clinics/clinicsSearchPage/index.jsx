import BookimedCeoAssurance from "@/components/clinics/clinicsSearchPage/bookimed/bookimedCeo";
import HowBookimedHelps from "@/components/clinics/clinicsSearchPage/bookimed/bookimedHelp";
import BookimedEditorialPolicy from "@/components/clinics/clinicsSearchPage/bookimed/bookimedPolicy";
import GetFreeConsolation from "@/components/clinics/clinicsSearchPage/freeConsultationForm";
import TreatmentFilteringSection from "@/components/clinics/clinicsSearchPage/treatmentFilteringSection";

export default function ClinicsSearchPageContainer() {
  return (
    <>
      <TreatmentFilteringSection />
      <BookimedEditorialPolicy />
      <BookimedCeoAssurance />
      <HowBookimedHelps />
      <GetFreeConsolation />
    </>
  );
}
