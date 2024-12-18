"use client";

import { useState } from "react";
import { ClinicForms } from "@/components/clinicDashboard/clinicForms";
import ClinicSidebar from "@/components/clinicDashboard/clinicSidebar/ClinicSidebar";

export default function ClinicDashboardPageContainer() {
  const [preference, setPreference] = useState("clinic-information");

  return (
    <div className="flex bg-[#71CCB60F] overflow-hidden">
      {/* Dashboard Sidebar component */}
      <ClinicSidebar />
      {/* Içerik dinamik olarak sidebarda seçilen preference'a göre değişecek */}
      <ClinicForms preference={preference} />
    </div>
  );
}
