// DashboardComponent.jsx
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardComponent = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
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
};

export default DashboardComponent;
