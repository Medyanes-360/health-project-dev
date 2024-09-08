import ClinicListItem from "./clinicListItem";

export default function ClinicList() {
  return (
    <div className="">
      {[...Array(2)].map((elem, index) => (
        <ClinicListItem key={index} />
      ))}
      {[...Array(2)].map((elem, index) => (
        <ClinicListItem key={index} />
      ))}
    </div>
  );
}
