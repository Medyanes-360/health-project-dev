import { useParams, useSearchParams } from "next/navigation";
import BreadCrumbComponent from "../../components/clinic/breadCrumbComponent";

export default function ClinicPageContainer() {
  const params = useParams();
  const searchParams = useSearchParams();
  //  console.log(searchParams.get("id")); // clinic ID'sini verir
  //  console.log(params.clinicName); // clinic Name'i verir
  return (
    <div>
      <BreadCrumbComponent />
      clinic here.
    </div>
  );
}
