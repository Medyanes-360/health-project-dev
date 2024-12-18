import LanguageSelector from "../clinicDashboardPage/languages";
import { ClinicDescriptionForm } from "../clinicDescription";
import { PaymentInformationForm } from "../PaymentInformationForm";
import { PremisesForm } from "../PremisesForm";

export const ClinicForms = ({ preference }) => {
  return (
    <div className="flex-1 w-full p-6 overflow-y-auto">
      <LanguageSelector />
      <ClinicDescriptionForm />
       <PremisesForm />
      <PaymentInformationForm/>
    </div>
  );
};
