import TreatmentPageContainer from "@/containers/treatmentPage";
import { treatmentsPageMockData } from "@/data/mocks/treatmentsPageMockData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  let response = [];
  const data = treatmentsPageMockData;
  data.forEach((treatment) => {
    response.push({ treatment: treatment.url });
  });

  return response;
}

export default async function TreatmentPage({ params }) {
  const { treatment } = params;
  // findByUrl: let treatment = await fetch(`https://ourApi/treatments/${params.treatmentId}`).then(
  // (res) => res.json()

  const currentTreatment = treatmentsPageMockData.find(
    (elem) => elem.url == treatment
  );
  //treatment'i fetchledik, eğer treatment yoksa? :
  if (!currentTreatment) {
    notFound();
  }

  return <TreatmentPageContainer treatment={currentTreatment} />;
}

// Bu sayfa treatment'a özel arama sayfası.
// param'da currentTreatment varsa treatment olarak ara, yoksa global arama sayfasına (/clinics) yönlendir diyeceğiz
