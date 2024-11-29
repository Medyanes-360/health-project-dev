import FeelTheBenefitComponent from "@/components/home/feelTheBenefitComponent";
import FormSection from "@/components/home/form";
import ContactUsBandComponent from "@/components/home/contactUsBandComponent";
import HeaderSection from "@/components/home/headerSection";
import MostPopularVacanciesSection from "@/components/home/mostPopularVacanciesSection";
import OurServicesComponent from "@/components/home/ourServicesComponent";
import PopularClinicsComponent from "@/components/home/popularClinicsComponent";
import QualifiedMedicalDoctors from "@/components/home/QualifiedMedicalDoctors/QualifiedMedicalDoctors";
import Testimonial from "@/components/home/Testimonial";
import ContanctFormSection from "@/components/home/form";

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
      <ContanctFormSection />
    </div>
  );
};

export default HomeContainer;
