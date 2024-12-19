import LanguageSelector from "../languages";
import { ClinicDescriptionForm } from "../clinicDescription";
import { PaymentInformationForm } from "../PaymentInformationForm";
import { PremisesForm } from "../PremisesForm";
import HealthForm from "@/components/clinicDashboard/healthForm";

export const ClinicForms = ({ preference }) => {
  return (
    <div className="flex-1 w-full p-6 overflow-y-auto">
      <HealthForm />
      <LanguageSelector />
      <ClinicDescriptionForm />
      <PremisesForm />
      <PaymentInformationForm />
    </div>
  );
};
