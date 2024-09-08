import ClinicListItem from "./clinicListItem";
import TrustPilotInfo from "./trustPilotInfo";

export default function ClinicList() {
  return (
    <div className="">
      {[...Array(2)].map((elem, index) => (
        <ClinicListItem key={index} />
      ))}
      <TrustPilotInfo />
      {[...Array(2)].map((elem, index) => (
        <ClinicListItem key={index} />
      ))}
    </div>
  );
}
