import BookimedCeoAssurance from "@/components/clinics/clinicsSearchPage/bookimed/bookimedCeo";
import BreadCrumbComponent from "@/globalElements/breadcrumb";
import HowBookimedHelps from "@/components/clinics/clinicsSearchPage/bookimed/bookimedHelp";
import BookimedEditorialPolicy from "@/components/clinics/clinicsSearchPage/bookimed/bookimedPolicy";
import GetFreeConsolation from "@/components/clinics/clinicsSearchPage/freeConsultationForm";
import ClinicSearchSection from "@/components/clinics/reusables/clinicSearchSection";
import PageHeading from "@/components/clinics/clinicsSearchPage/pageHeading";

export default function ClinicsSearchPageContainer({ searchParams }) {
  return (
    <>
      <BreadCrumbComponent />
      <PageHeading />
      <ClinicSearchSection />x
      <BookimedEditorialPolicy />
      <BookimedCeoAssurance />
      <HowBookimedHelps />
      <GetFreeConsolation />
    </>
  );
}
