export default function ClinicDashboardPageContainer({ currentPage }) {
  return (
    <>
      {currentPage.name == "Clinic information" && (
        <p>Clinic İnformation Form</p>
      )}
      {currentPage.name == "Clinic Description" && (
        <p>Clinic Description Form</p>
      )}
      {currentPage.name == "Add Video" && <p>Add Video Form</p>}
    </>
  );
}
