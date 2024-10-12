import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function ClinicDashboardLayout({ children }) {
  return (
    <div className="flex bg-[#71CCB60F]">
      {/* Sidebar - Sol tarafta yer alacak */}
      <Sidebar />

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
