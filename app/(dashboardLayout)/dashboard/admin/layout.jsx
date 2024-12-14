import Sidebar from "@/components/clinicDashboard/layout/Sidebar";
import Topbar from "@/components/clinicDashboard/layout/Topbar";

export default function ClinicDashboardLayout({ children }) {
  return (
    <div className="flex bg-[#71CCB60F]">
      {/* Sidebar - Sol tarafta yer alacak */}
      <div className={`h-screen transition-all duration-300 relative`}>
        <div
          className={`bg-white shadow-md px-2 py-2 sm:px-4 sm:py-3 rounded-3xl h-full flex flex-col gap-2
       `}
        >
          Admin Sidebar component
        </div>
      </div>

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
