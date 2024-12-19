import LanguageSelector from "../languages";
import { ClinicDescriptionForm } from "../clinicDescription";
import { ClinicOverviewForm } from "../clinicOverviewForm";
import { PaymentInformationForm } from "../PaymentInformationForm";
import { PremisesForm } from "../PremisesForm";
import HealthForm from "@/components/clinicDashboard/healthForm";
import { TravelServicesForm } from "../travelServicesForm";
import ClinicServiceForm from "@/components/clinicDashboard/clinicServiceForm";

export const ClinicForms = ({ preference }) => {
  return (
    <div className="flex-1 w-full p-6 overflow-y-auto">
      <ClinicOverviewForm />
      <HealthForm />
      <LanguageSelector />
      <ClinicDescriptionForm />
      <PremisesForm />
      <ClinicServiceForm />
      <PaymentInformationForm />
      <TravelServicesForm />
    </div>
  );
};
