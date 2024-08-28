import ContactUsBandComponent from "@/components/contactUsBandComponent";
import FeelTheBenefitComponent from "@/components/feelTheBenefitComponent";
import FormSection from "@/components/form";
import HeaderSection from "@/components/headerSection";
import MostPopularVacanciesSection from "@/components/mostPopularVacanciesSection";
import OurServicesComponent from "@/components/ourServicesComponent";
import PopularClinicsComponent from "@/components/popularClinicsComponent";
import QualifiedMedicalDoctors from "@/components/QualifiedMedicalDoctors/QualifiedMedicalDoctors";
import TestimonialText from "@/components/Testimonial/TestimonialText";

const HomeContainer = () => {
  return (
    <div className="">
      <HeaderSection />
      <ContactUsBandComponent />
      <MostPopularVacanciesSection />
      <FeelTheBenefitComponent />
      <PopularClinicsComponent />
      <OurServicesComponent />
      <ContactUsBandComponent/>
      <TestimonialText/>
      <QualifiedMedicalDoctors/>
      <FormSection/>

    </div>
  );
};

export default HomeContainer;
