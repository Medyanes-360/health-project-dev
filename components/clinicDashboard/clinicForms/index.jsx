import LanguageSelector from "../clinicDashboardPage/languages";

export const ClinicForms = ({ preference }) => {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <LanguageSelector />
    </div>
  );
};
