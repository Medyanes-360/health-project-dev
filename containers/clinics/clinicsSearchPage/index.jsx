import BookimedCeoAssurance from "@/components/clinics/clinicsSearchPage/bookimed/bookimedCeo";
import BreadCrumbComponent from "@/globalElements/breadcrumb";
import HowBookimedHelps from "@/components/clinics/clinicsSearchPage/bookimed/bookimedHelp";
import BookimedEditorialPolicy from "@/components/clinics/clinicsSearchPage/bookimed/bookimedPolicy";
import GetFreeConsolation from "@/components/clinics/clinicsSearchPage/freeConsultationForm";
import ClinicSearchSection from "@/components/clinics/reusables/clinicSearchSection";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";

export default function ClinicsSearchPageContainer() {
  return (
    <>
      <BreadCrumbComponent />
      <ExtraLargePageContainer>
        <p className="text-3xl text-primary font-semibold">
          Best Clinics in 2024 Globally
        </p>
      </ExtraLargePageContainer>
      <ClinicSearchSection />x
      <BookimedEditorialPolicy />
      <BookimedCeoAssurance />
      <HowBookimedHelps />
      <GetFreeConsolation />
    </>
  );
}
