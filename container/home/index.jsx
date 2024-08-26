import ContactUsBandComponent from "@/component/contactUsBandComponent";
import HeaderSection from "@/component/headerSection";
import MostPopularVacanciesSection from "@/component/mostPopularVacanciesSection";

const HomeContainer = () => {
  return (
    <div className="flex flex-column">
      <HeaderSection />
      <ContactUsBandComponent />
      <MostPopularVacanciesSection />
    </div>
  );
};

export default HomeContainer;
