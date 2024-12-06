export default function ClinicDashboardPageContainer({ currentPage }) {
  return (
    <>
      {currentPage.name == "Clinic information" && (
        <p>Clinic İnformation Form</p>
        // component'ın bulunacağı yer: /components/clinicDashboard/clinicInformationForm
      )}
      {currentPage.name == "Clinic Description" && (
        <p>Clinic Description Form</p>
        // component'ın bulunacağı yer: /components/clinicDashboard/clinicDescriptionForm
      )}
      {
        currentPage.name == "Add Video" && <p>Add Video Form</p>
        // component'ın bulunacağı yer: /components/clinicDashboard/addVideoForm
      }
    </>
  );
}
