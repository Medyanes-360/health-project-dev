"use client";

import { useState } from "react";
import { ClinicForms } from "@/components/clinicDashboard/clinicForms";

export default function ClinicDashboardPageContainer() {
  const [preference, setPreference] = useState("clinic-information");

  return (
    <div className="flex bg-[#71CCB60F] flex-1 overflow-y-auto">
      {/* Dashboard Sidebar component */}
      <div className={`h-screen transition-all duration-300 relative`}>
        <div
          className={`bg-white shadow-md px-2 py-2 sm:px-4 sm:py-3 rounded-3xl h-full flex flex-col gap-2
       `}
        >
          Clinic Information <br /> Clinic description
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        {/* Içerik dinamik olarak sidebarda seçilen preference'a göre değişecek */}
        <ClinicForms preference={preference} />
      </div>
    </div>
  );
}
