// 1. yöntem: dashboardPage'leri verelim, currentPage'i paramstan alalım ve container'a  atalım
// 2. yöntem bununla ilişkili, page yerine container içinde decodeURIComponent() diyerek direk sayfa ismini alıp öyle renderlayabilriiz componentları -containerdan props geçmek yerine-.
// örneğin: {decodeURIComponent(params.page)=="Clinic Information" && <ClinicInformationForm/>}

import DashboardPageContainer from "@/containers/dashboard";
import { redirect } from "next/navigation";

// 3. yöntem: [page] slug'ını direk url olarak yapmak. eğer böyle yaparsak sidebar listesinin itemlarını tanımladığımız yerde itemlara url propu verebiliriz,
// linkler item.url diyerek url'ye yönlendirir, biz de onu params.page diyerek direk url datasını alır ve find yaparız.

// 4. yöntem: 2. yöntemin aynı ama 3. gibi kullanılanı. params'ı page.jsx'te çağırmak yerine container içinde çağırıp const params= useParams diyerek, params.page diyip url'yi alırız ve componentları bu url'ye göre renderlarız.

export default function DashboardPage({ params }) {
  // 1. yöntem:
  // hangi sayfada olduğumuzu dashboardData'dan bul.
  const currentPage = dashboardData.find(
    (elem) => elem.name == decodeURIComponent(params.page)
  );
  // eğer sayfa yoksa anasayfaya redirect yap.
  if (!currentPage) redirect("/dashboard");

  // eğer bulduysan hangi sayfada olduğumuz bilgisini container'a gönder. container'da conditional rendering yapılsın.:

  return <DashboardPageContainer currentPage={currentPage} />;

  // 3. yöntem:
  //   const currentPage = dashboardData.find((elem) => elem.url == params.page);
  //   if (!currentPage) redirect("/dashboard");
  //   return <DashboardPageContainer currentPage={currentPage} />;
}

const dashboardData = [
  {
    id: 0,
    name: "Clinic information",
    url: "clinic-information",
  },
  {
    id: 1,
    name: "Clinic Description",
    url: "clinic-description",
  },
  {
    id: 1,
    name: "Add Video",
    url: "add-video",
  },
];
