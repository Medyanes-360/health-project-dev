import BestClinics from "@/components/blog/treatmentBlogPage/bestClinics";
import BreadCrumbComponent from "@/globalElements/breadcrumb";
import BestVenceerPackages from "@/components/blog/treatmentBlogPage/bestVencerPackage";
import InsuranceAndPayment from "@/components/blog/treatmentBlogPage/insuranceAndPayment";
import CheapVeneers from "@/components/blog/treatmentBlogPage/Top7";
import Citations from "@/components/blog/treatmentBlogPage/citations";
import FaqSection from "@/components/blog/treatmentBlogPage/faqSection";
import CompositeVeneers from "@/components/blog/treatmentBlogPage/compositeVeneers";
import TypeOfDental from "@/components/blog/treatmentBlogPage/typeOfDental";
import BenefitsOfDental from "@/components/blog/treatmentBlogPage/BenefitsOfDental";
import FullSetVeneers from "@/components/blog/treatmentBlogPage/FullSetVeneers";
import AveragePrice from "@/components/blog/treatmentBlogPage/AveragePrice";
import Comment from "@/components/blog/treatmentBlogPage/Comment";
import ClinicalPrice from "@/components/blog/treatmentBlogPage/ClinicalPrice";
export default function TreatmentBlogPageContainer({ treatmentblogdata }) {
  const treatment = treatmentblogdata.treatment;

  return (
    <div>
      <BreadCrumbComponent
        // Breadcrumb'da örn. Hair Transplant yerine hair-transplant yazdığı için custom path veriyoruz:
        customPaths={[
          {
            replace: true,
            index: 2,
            name: treatment.title,
            url: `/blog/${treatment.url}`,
          },
        ]}
      />
      <FullSetVeneers />
      <Comment />
      <AveragePrice />
      <ClinicalPrice />

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
