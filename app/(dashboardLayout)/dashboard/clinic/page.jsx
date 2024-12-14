import Sidebar from "@/components/clinicDashboard/layout/Sidebar";
import Topbar from "@/components/clinicDashboard/layout/Topbar";
import ClinicDashboardPageContainer from "@/containers/clinicDashboard";

export default function ClinicDashboardPage() {
  return (
    <div className="flex ">
      <div className="flex-1 flex flex-col">
        <ClinicDashboardPageContainer />
      </div>
    </div>
  );
}
