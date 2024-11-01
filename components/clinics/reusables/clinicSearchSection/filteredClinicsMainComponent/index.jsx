import ClinicList from "./clinicList";

export default function FilteredClinicsMainComponent({ maxheight }) {
  return (
    <div className={`ml-6 h-full    flex-1`}>
      <ClinicList maxheight={maxheight} />
    </div>
  );
}
