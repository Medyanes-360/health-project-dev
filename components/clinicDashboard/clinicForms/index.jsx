import LanguageSelector from "../languages";
import { ClinicDescriptionForm } from "../clinicDescription";
import { ClinicOverviewForm } from "../clinicOverviewForm";
import { PaymentInformationForm } from "../PaymentInformationForm";
import { PremisesForm } from "../PremisesForm";
import HealthForm from "@/components/clinicDashboard/healthForm";
import { TravelServicesForm } from "../travelServicesForm";
import ClinicServiceForm from "@/components/clinicDashboard/clinicServiceForm";
import LocationMaker from "../locationMaker";
import OpeningHours from "../openingHours";
import AddPictures from "../addPictures";
import CurrencySelector from "@/components/clinicDashboard/currencySelector";
import AddVideo from "@/components/clinicDashboard/addVideo";
import ExportEnquiries from "../exportEnquiries";
import { AccreditationsForm } from "../accreditationsForm";
import ClinicInformation from "../clinicInformation";

export const ClinicForms = ({ preference }) => {
  return (
    <div className="flex-1 w-full p-6 overflow-y-auto mb-20 md:mb-0">
      <ClinicInformation />
      <HealthForm />
      <LanguageSelector />
      <ClinicDescriptionForm />
      <CurrencySelector />
      <PremisesForm />
      <ClinicServiceForm />
      <PaymentInformationForm />
      <TravelServicesForm />
      <OpeningHours />
      <AddVideo />
      <AccreditationsForm />
      <AddPictures />
      <ExportEnquiries />
    </div>
  );
};
