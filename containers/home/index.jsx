import ContactUsBandComponent from "@/components/contactUsBandComponent";
import FeelTheBenefitComponent from "@/components/feelTheBenefitComponent";
import HeaderSection from "@/components/headerSection";
import MostPopularVacanciesSection from "@/components/mostPopularVacanciesSection";
import OurServicesComponent from "@/components/ourServicesComponent";
import PopularClinicsComponent from "@/components/popularClinicsComponent";
import QualifiedMedicalDoctors from "@/components/QualifiedMedicalDoctors/QualifiedMedicalDoctors";
import TestimonialText from "@/components/Testimonial/TestimonialText";

const HomeContainer = () => {
  return (
    <div className="xl:container mx-auto">
      <HeaderSection />
      <ContactUsBandComponent />
      <MostPopularVacanciesSection />
      <FeelTheBenefitComponent />
      <PopularClinicsComponent />
    </div>
  );
};

export default HomeContainer;
