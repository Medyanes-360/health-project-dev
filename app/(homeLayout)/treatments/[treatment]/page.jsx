import TreatmentPageContainer from "@/containers/treatmentPage";

//burada sayfanın propları alınarak container'a gönderilecek. container'dan tüm componentlara ilgili data gönderilecek.
// sayfa tüm treatment'lar için aynı. yalnızca treatmentların bilgileri değişiyor.
// Örneğin /hair-transplant sayfasında hair transplant hakkında bilgiler varken ,
// /dental-treatments sayfasında dental treatment ile alakalı bilgiler gösterilecek, fakat yapı aynı olacak.
// bu bilgileri getProps ile çekeceğiz. daha sonra container'a props olarak göndereceğiz. Container'dan geri kalan tüm sectionlara dağıtılacak.

// WARN : getStaticProps mu getServersideProps mu? şimdilik mock data oluşturarak kullanacağız
export default function treatmentPage() {
  return <TreatmentPageContainer />;
}
