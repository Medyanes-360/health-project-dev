import ClinicListItem from "./clinicListItem";
import TrustPilotInfo from "./trustPilotInfo";

export default function ClinicList({ maxheight }) {
  return (
    <div
      style={{
        maxHeight: `${maxheight}px`,
        overflowY: "scroll",
        overflowX: "visible",
      }}
      className=""
    >
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
