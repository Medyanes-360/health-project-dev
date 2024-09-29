import Link from "next/link";
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
      <div className="flex items-center justify-center mt-6 text-black font-semibold hover:underline">
        <Link href="/">See more deals</Link>
      </div>
    </div>
  );
}
