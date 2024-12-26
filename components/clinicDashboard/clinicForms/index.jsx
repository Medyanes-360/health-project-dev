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
  const renderForm = () => {
    switch (preference) {
      case "clinic-information":
        return <ClinicInformation />;
      case "insurances":
        return <HealthForm />;
      case "languages":
        return <LanguageSelector />;
      case "clinic-description":
        return <ClinicDescriptionForm />;
      case "currency":
        return <CurrencySelector />;
      case "premises":
        return <PremisesForm />;
      case "services":
        return <ClinicServiceForm />;
      case "payment":
        return <PaymentInformationForm />;
      case "travel":
        return <TravelServicesForm />;
      case "hours":
        return <OpeningHours />;
      case "video":
        return <AddVideo />;
      case "accreditations":
        return <AccreditationsForm />;
      case "pictures":
        return <AddPictures />;
      case "enquiries":
        return <ExportEnquiries />;
      default:
        return <div>?</div>;
    }
  };

  return (
    <div className="flex-1 w-full p-6 overflow-y-auto mb-20 md:mb-0">
      {renderForm()}
    </div>
  );
};
