import { Suspense } from "react";
import ClinicsSearchPageContainer from "@/containers/clinics/clinicsSearchPage";

export default function ClinicsSearchPage({ searchParams }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClinicsSearchPageContainer searchParams={searchParams} />
    </Suspense>
  );
}
