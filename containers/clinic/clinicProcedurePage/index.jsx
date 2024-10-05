import BeforeAndAfter from "@/components/clinic/clinicProcedurePage/beforeAfterComponent";
import BreadCrumbComponent from "@/globalElements/breadcrumb";
import ClinicBanner from "@/components/clinic/clinicProcedurePage/clinicBanner";
import FaqSection from "@/components/clinic/clinicProcedurePage/faqSection";
import FreeConsultationBandComponent from "@/components/clinic/clinicProcedurePage/freeConsultationBandComponent";
import HowItWorks from "@/components/clinic/clinicProcedurePage/howItWorks";
import LocationSection from "@/components/clinic/clinicProcedurePage/locationSection";
import PatientReviewsSection from "@/components/clinic/clinicProcedurePage/patientReviewsSection";
import ProcedureOverview from "@/components/clinic/clinicProcedurePage/procedureOverview";
import ProcedureSpecialist from "@/components/clinic/clinicProcedurePage/procedureSpecialist";
import ProgramBenefits from "@/components/clinic/clinicProcedurePage/programBenefits";
import ProgramDetails from "@/components/clinic/clinicProcedurePage/programDetailsComponent";
import YouMightAlsoLikeSection from "@/components/clinic/clinicProcedurePage/youMightAlsoLikeSection";
import { clinicPageMockData } from "@/data/mocks/clinicPageMockData";
import { Country, State } from "country-state-city";
import PageLinkTabs from "@/components/clinic/clinicProcedurePage/pageLinkTabs";

export default function ClinicProcedurePageContainer({ clinic, procedure }) {
  const reviews = procedure.reviews;
  const address = clinic.location.fullAddress;
  const faqs = procedure.faqs;
  const data = clinicPageMockData;

  return (
    <div>
      <BreadCrumbComponent
        customPaths={[
          {
            //hair transplant in turkey linki: 'clinic' in yerine hair transplant in turkey yazacak. bu yüzden replace true.
            replace: true,
            index: 1,
            name: `${procedure.treatment.title} in ${
              Country.getCountryByCode(clinic.location.countryIsoCode).name
            }`,

            url: `/clinics/${procedure.treatment.url}?country=${clinic.location.countryIsoCode}`,
          },
          {
            //hair transplant in İstanbul linki: hair transplant in turkey'den sonra yazmasını istiyoruz. bu yüzden replace:false, index:1.
            replace: false,
            index: 1,
            name: `${procedure.treatment.title} in ${
              State.getStateByCodeAndCountry(
                clinic.location.stateIsoCode,
                clinic.location.countryIsoCode
              ).name
            }`,

            url: `/clinics/${procedure.treatment.url}?country=${clinic.location.countryIsoCode}&state=${clinic.location.stateIsoCode}`,
          },
        ]}
      />
      <div className="w-full h-0.5   border border-[#E4E5E8]  "></div>
      <ClinicBanner />
      <PageLinkTabs />
      <ProcedureOverview />
      <FreeConsultationBandComponent />
      <ProcedureSpecialist />
      <BeforeAndAfter />
      <ProgramDetails />
      <ProgramBenefits data={data} />
      <HowItWorks data={data} />
      {/* Fırat */}
      <PatientReviewsSection reviews={reviews} />
      <LocationSection address={address} />
      <FaqSection data={faqs} />
      <YouMightAlsoLikeSection />
    </div>
  );
}
