import FeelTheBenefitComponent from "@/components/home/feelTheBenefitComponent";
import FormSection from "@/components/home/form";
import ContactUsBandComponent from "@/components/home/contactUsBandComponent";
import HeaderSection from "@/components/home/headerSection";
import MostPopularVacanciesSection from "@/components/home/mostPopularVacanciesSection";
import OurServicesComponent from "@/components/home/ourServicesComponent";
import PopularClinicsComponent from "@/components/home/popularClinicsComponent";
import QualifiedMedicalDoctors from "@/components/home/QualifiedMedicalDoctors/QualifiedMedicalDoctors";
import Testimonial from "@/components/home/Testimonial";
import BeforeAfterPhotoSlider from "@/globalElements/beforeAfterPhotoSlider";

const HomeContainer = () => {
  return (
    <div className="">
      <div className=" h-56  flex items-center justify-center">
        <BeforeAfterPhotoSlider
          width="300px"
          afterImageSrc="/assets/images/clinic1.png"
          beforeImageSrc="/assets/images/clinic2.png"
        />
      </div>
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
