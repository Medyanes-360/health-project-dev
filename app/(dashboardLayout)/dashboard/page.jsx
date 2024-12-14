import Sidebar from "@/components/clinicDashboard/layout/Sidebar";
import Topbar from "@/components/clinicDashboard/layout/Topbar";
import ClinicDashboardPageContainer from "@/containers/clinicDashboard";

export default function ClinicDashboardPage() {
  return (
    <div className="flex bg-[#71CCB60F]">
      {/* Sidebar - Sol tarafta yer alacak */}
      <Sidebar />
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar - Üstte yer alacak */}
        <Topbar />
        {/* Dinamik içerik alanı - Topbar altında yer alacak */}
        <ClinicDashboardPageContainer />
      </div>
    </div>
  );
}
