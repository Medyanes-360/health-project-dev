import ClinicImagesSection from "@/components/clinic/clinicProfilePage/clinicImagesSection";
import BreadCrumbComponent from "@/globalElements/breadcrumb";
import { Country, State } from "country-state-city";
export default function ClinicProfilePageContainer({ clinic }) {
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
    </>
  );
}
