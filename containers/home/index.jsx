import ContactUsBandComponent from "@/components/contactUsBandComponent";
import FeelTheBenefitComponent from "@/components/feelTheBenefitComponent";
import FormSection from "@/components/form";
import HeaderSection from "@/components/headerSection";
import MostPopularVacanciesSection from "@/components/mostPopularVacanciesSection";
import OurServicesComponent from "@/components/ourServicesComponent";
import PopularClinicsComponent from "@/components/popularClinicsComponent";
import QualifiedMedicalDoctors from "@/components/qualifiedMedicalDoctors/QualifiedMedicalDoctors";
import Testimonial from "@/components/testimonial";

const HomeContainer = () => {
  return (
    <div className="">
      <HeaderSection />
      <ContactUsBandComponent />
      <MostPopularVacanciesSection />
      <FeelTheBenefitComponent />
      <PopularClinicsComponent />
      <OurServicesComponent />
      <ContactUsBandComponent />
      <Testimonial />
      <QualifiedMedicalDoctors />
      <FormSection />
    </div>
  );
};

export default HomeContainer;
