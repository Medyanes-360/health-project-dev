import HowItWorks from "@/components/clinic/clinicProfilePage/howItWorks";
import AboutClinic from "@/components/clinic/clinicProfilePage/aboutClinic";
import BeforeAndAfterPictures from "@/components/clinic/clinicProfilePage/beforeAndAfterPictures";
import ClinicImages from "@/components/clinic/clinicProfilePage/clinicImages";
import CoutriesForTreatment from "@/components/clinic/clinicProfilePage/coutriesForTreatment";
import PopularClinics from "@/components/clinic/clinicProfilePage/popularClinics";
import DentalTreatmentDropDown from "@/components/clinic/clinicProfilePage/dentalTreatmentDropDown";
import DirectTabs from "@/components/clinic/clinicProfilePage/directTabs";
import Overview from "@/components/clinic/clinicProfilePage/overview";
import BreadCrumbComponent from "@/globalElements/breadcrumb";
import { Country, State } from "country-state-city";
import { clinicPageMockData } from "@/data/mocks/clinicPageMockData";
import GetAFreeConsultation from "@/components/clinic/clinicProfilePage/getAFreeConsultation";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";
import GetAFreeQuote from "@/components/clinic/clinicProfilePage/getAFreeQuote";
import Location from "@/components/clinic/clinicProfilePage/location";

export default function ClinicProfilePageContainer({ clinic }) {
  const address = clinic.location.fullAddress;
  const data = clinicPageMockData;

  return (
    <>
      <BreadCrumbComponent
        customPaths={[
          {
            //hair transplant in turkey linki:
            replace: true,
            index: 1,
            name: `Clinics in ${
              Country.getCountryByCode(clinic.location.countryIsoCode).name
            }`,

            url: `/clinics/?country=${clinic.location.countryIsoCode}`,
          },
          {
            //hair transplant in İstanbul linki:
            replace: false,
            index: 1,
            name: `Clinics in ${
              State.getStateByCodeAndCountry(
                clinic.location.stateIsoCode,
                clinic.location.countryIsoCode
              ).name
            }`,

            url: `/clinics/?country=${clinic.location.countryIsoCode}&state=${clinic.location.stateIsoCode}`,
          },
        ]}
      />
      <ClinicImages images={clinic.images} />
      <DirectTabs />
      <ExtraLargePageContainer className="!relative flex flex-col gap-8 mt-[20px] md:flex-row flex-col-reverse">
        <div className="shadow-lg flex-1 rounded-2xl p-5">
          <Overview />
          <DentalTreatmentDropDown />
          <BeforeAndAfterPictures />
          <AboutClinic />
          <Location address={address} />
          <HowItWorks />
          <GetAFreeConsultation />
        </div>
        <GetAFreeQuote className="" />
      </ExtraLargePageContainer>

      <PopularClinics />
      <CoutriesForTreatment />
    </>
  );
}
