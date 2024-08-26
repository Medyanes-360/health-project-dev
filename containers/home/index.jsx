import ContactUsBandComponent from "@/components/contactUsBandComponent";
import FeelTheBenefitComponent from "@/components/feelTheBenefitComponent";
import HeaderSection from "@/components/headerSection";
import MostPopularVacanciesSection from "@/components/mostPopularVacanciesSection";
import OurServicesComponent from "@/components/ourServicesComponent";
import PopularClinicsComponent from "@/components/popularClinicsComponent";

const HomeContainer = () => {
  return (
    <div className="xl:container mx-auto">
      <HeaderSection />
      <ContactUsBandComponent />
      <MostPopularVacanciesSection />
      <FeelTheBenefitComponent />
      <PopularClinicsComponent />
      <OurServicesComponent />
    </div>
  );
};

export default HomeContainer;
