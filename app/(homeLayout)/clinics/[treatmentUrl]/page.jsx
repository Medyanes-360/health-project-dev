import ClinicsByTreatmentSearchPageContainer from "@/containers/clinics/clinicsByTreatmentSearchPage";
import { treatmentsPageMockData } from "@/data/mocks/treatmentsPageMockData";
import { notFound } from "next/navigation";

export default function ClinicsByTreatmentSearchPage({ params }) {
  // findByUrl: let treatment = await fetch(`https://ourApi/treatments/${params.treatmentId}`).then(
  // (res) => res.json()

  const currentTreatment = treatmentsPageMockData.find(
    (elem) => elem.url == params.treatmentUrl
  );
  //treatment'i fetchledik, eğer treatment yoksa? :
  if (!currentTreatment) {
    notFound();
  }

  return <ClinicsByTreatmentSearchPageContainer treatment={currentTreatment} />;
}
