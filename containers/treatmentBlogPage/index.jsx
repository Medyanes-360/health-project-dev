import BestClinics from "@/components/treatmentBlog/bestClinics";
import BreadCrumbComponent from "../../components/treatmentBlog/breadCrumbComponent";
import BestVenceerPackages from "@/components/treatmentBlog/bestVencerPackage";
import InsuranceAndPayment from "@/components/treatmentBlog/insuranceAndPayment";
import CheapVeneers from "@/components/treatmentBlog/Top7";
import Citations from "@/components/treatmentBlog/citations";
import FaqSection from "@/components/treatmentBlog/faqSection";
import CompositeVeneers from "@/components/treatmentBlog/compositeVeneers";
import TypeOfDental from "@/components/treatmentBlog/typeOfDental";
import BenefitsOfDental from "@/components/treatmentBlog/BenefitsOfDental";

export default function TreatmentBlogPageContainer() {
  return (
    <div>
      <BreadCrumbComponent />

      <BenefitsOfDental />
      <TypeOfDental />
      <CompositeVeneers />
      <BestClinics />
      <BestVenceerPackages />
      <InsuranceAndPayment />
      <FaqSection />
      <CheapVeneers />
      <Citations />
    </div>
  );
}
