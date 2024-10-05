import ClinicListItem from "./clinicListItem";
import { useState } from "react";
import TrustPilotInfo from "./trustPilotInfo";

export default function ClinicList({ maxheight }) {
  const [isLoading, setIsLoading] = useState(false);
  const [clinics, setClinics] = useState([5]);
  const fetchClinics = () => {
    setIsLoading(true);
    setTimeout(() => {
      const currentClinics = [...clinics];
      for (let i = 0; i < 5; i++) {
        currentClinics.push("");
      }
      setClinics(currentClinics);
      setIsLoading(false);
    }, 1000);
  };
  console.log(clinics);
  return (
    <div
      style={{
        maxHeight: `${maxheight}px`,
        overflowY: "scroll",
        overflowX: "visible",
      }}
      className="flex flex-col items-center"
    >
      {clinics.map((clinic, index) => {
        return (
          <>
            <ClinicListItem
              fetchClinics={fetchClinics} //fetchleme fonksiyonu
              lastItem={index == clinics.length - 1 ? true : false} // son item mı? öyleyse eğer bu item viewPort'a girerse fetchle.
              key={index}
            />
            {index == 2 || (index % 8 == 0 && <TrustPilotInfo />)}
            {isLoading && index == clinics.length - 1 && "Loading..."}
          </>
        );
      })}
    </div>
  );
}
