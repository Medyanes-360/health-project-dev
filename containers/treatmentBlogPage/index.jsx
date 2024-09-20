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
import FullSetVeneers from "@/components/treatmentBlog/FullSetVeneers";
import AveragePrice from "@/components/treatmentBlog/AveragePrice";
import Comment from "@/components/treatmentBlog/Comment";
export default function TreatmentBlogPageContainer() {
  return (
    <div>
      <FullSetVeneers />
      <Comment />
      <AveragePrice />
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
