import ClinicImages from "@/components/clinic/clinicProfilePage/clinicImages";
import CoutriesForTreatment from "@/components/clinic/clinicProfilePage/coutriesForTreatment";
import PopularClinics from "@/components/clinic/clinicProfilePage/popularClinics";
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
      <ClinicImages images={clinic.images} />
      <PopularClinics />
      <CoutriesForTreatment />
    </>
  );
}
