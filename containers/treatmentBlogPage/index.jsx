import BestClinics from "@/components/treatmentBlog/bestClinics";
import BreadCrumbComponent from "../../components/treatmentBlog/breadCrumbComponent";
import BestVenceerPackages from "@/components/treatmentBlog/bestVencerPackage";

export default function TreatmentBlogPageContainer() {
  return (
    <>
      <BreadCrumbComponent />

      <BestClinics />
      <BestVenceerPackages />
    </>
  );
}
