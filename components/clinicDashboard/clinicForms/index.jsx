import LanguageSelector from "../clinicDashboardPage/languages";
import { ClinicDescriptionForm } from "../clinicDescription";
import { PremisesForm } from "../PremisesForm";

export const ClinicForms = ({ preference }) => {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <LanguageSelector />
      <ClinicDescriptionForm />
      <PremisesForm />
    </div>
  );
};
