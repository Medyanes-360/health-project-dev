import ClinicSidebar from "@/components/clinicDashboard/clinicSidebar/ClinicSidebar";
import Sidebar from "@/components/clinicDashboard/layout/Sidebar";
import Topbar from "@/components/clinicDashboard/layout/Topbar";

export default function ClinicDashboardLayout({ children }) {
  return (
    <div className="flex bg-[#71CCB60F]">
      {/* Sidebar - Sol tarafta yer alacak */}
      <ClinicSidebar/>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar - Üstte yer alacak */}
        <Topbar />

        {/* Dinamik içerik alanı - Topbar altında yer alacak */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
