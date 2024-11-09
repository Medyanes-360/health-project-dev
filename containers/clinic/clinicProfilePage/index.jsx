import HowItWorks from "@/components/clinic/clinicProfilePage/howItWorks";
import LocationSection from "@/components/clinic/clinicProcedurePage/locationSection";
import AboutClinic from "@/components/clinic/clinicProfilePage/aboutClinic";
import BeforeAndAfterPictures from "@/components/clinic/clinicProfilePage/beforeAndAfterPictures";
import ClinicImagesSection from "@/components/clinic/clinicProfilePage/clinicImagesSection";
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
      <ClinicImagesSection images={clinic.images} />
      <DirectTabs />
      <ExtraLargePageContainer className="flex gap-8 ">
        <div className=" shadow-lg rounded-2xl  p-5 ">
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
    </>
  );
}
