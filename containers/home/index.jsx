import FeelTheBenefitComponent from "@/components/feelTheBenefitComponent";
import FormSection from "@/components/form";
import ContactUsBandComponent from "@/components/home/contactUsBandComponent";
import HeaderSection from "@/components/home/headerSection";
import MostPopularVacanciesSection from "@/components/home/mostPopularVacanciesSection";
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
