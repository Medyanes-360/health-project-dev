import TreatmentPageContainer from "@/containers/treatmentPage";
import { treatmentsPageMockData } from "@/data/mocks/treatmentsPageMockData";
import { notFound } from "next/navigation";

//burada sayfanın propları alınarak container'a gönderilecek. container'dan tüm componentlara ilgili data gönderilecek.
// sayfa tüm treatment'lar için aynı. yalnızca treatmentların bilgileri değişiyor.
// Örneğin /hair-transplant sayfasında hair transplant hakkında bilgiler varken ,
// /dental-treatments sayfasında dental treatment ile alakalı bilgiler gösterilecek, fakat yapı aynı olacak.
// bu bilgileri getProps ile çekeceğiz. daha sonra container'a props olarak göndereceğiz. Container'dan geri kalan tüm sectionlara dağıtılacak.

// WARN : getStaticProps mu getServersideProps mu? şimdilik mock data oluşturarak kullanacağız

export async function generateStaticParams() {
  let response = [];
  const data = treatmentsPageMockData;
  data.forEach((treatment) => {
    response.push({ treatment: treatment.url });
  });

  return response;
}

export default async function treatmentPage({ params }) {
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
