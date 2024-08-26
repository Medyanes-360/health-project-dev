import ContactUsBandComponent from "@/components/contactUsBandComponent";
import HeaderSection from "@/components/headerSection";
import MostPopularVacanciesSection from "@/components/mostPopularVacanciesSection";

const HomeContainer = () => {
  return (
    <div className="xl:container mx-auto  ">
      <HeaderSection />
      <ContactUsBandComponent />
      <MostPopularVacanciesSection />
    </div>
  );
};

export default HomeContainer;
