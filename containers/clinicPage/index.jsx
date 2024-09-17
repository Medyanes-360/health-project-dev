import { useParams, useSearchParams } from "next/navigation";
import BreadCrumbComponent from "../../components/clinic/breadCrumbComponent";
import BeforeAfterComponent from "@/components/clinic/beforeAfterComponent";
import ProgramDetailsComponent from "@/components/clinic/programDetailsComponent";


export default function ClinicPageContainer() {
  const params = useParams();
  const searchParams = useSearchParams();
  //  console.log(searchParams.get("id")); // clinic ID'sini verir
  //  console.log(params.clinicName); // clinic Name'i verir
  return (
    <div>
      <BreadCrumbComponent />
      <BeforeAfterComponent />
      <ProgramDetailsComponent />
      clinic here.
    </div>
  );
}
