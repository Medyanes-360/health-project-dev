import ContactUsBandComponent from "@/components/contactUsBandComponent";
import FeelTheBenefitComponent from "@/components/feelTheBenefitComponent";
import HeaderSection from "@/components/headerSection";
import MostPopularVacanciesSection from "@/components/mostPopularVacanciesSection";

const HomeContainer = () => {
  return (
    <div className="xl:container mx-auto  ">
      <HeaderSection />
      <ContactUsBandComponent />
      <MostPopularVacanciesSection />
      <FeelTheBenefitComponent />
    </div>
  );
};

export default HomeContainer;
