import BestClinics from "@/components/treatmentBlog/bestClinics";
import BreadCrumbComponent from "../../components/treatmentBlog/breadCrumbComponent";
import BestVenceerPackages from "@/components/treatmentBlog/bestVencerPackage";
import InsuranceAndPayment from "@/components/treatmentBlog/insuranceAndPayment";
import BlogFaqs from "@/components/treatmentBlog/faqs";
import CheapVeneers from "@/components/treatmentBlog/Top7";
import Citations from "@/components/treatmentBlog/citations";

export default function TreatmentBlogPageContainer() {
  return (
    <div>
      <BreadCrumbComponent />

      <BestClinics />
      <BestVenceerPackages />
      <InsuranceAndPayment />
      <BlogFaqs />
      <CheapVeneers />
      <Citations />
    </div>
  );
}
