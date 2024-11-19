import { useState } from "react";
import ClinicList from "./clinicList";
import { FilterOptionsBarMobile } from "../FilterOptionsBarMobile";

export default function FilteredClinicsMainComponent({ maxheight }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleFilterModal = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className={`h-full flex-1`}>
      <FilterOptionsBarMobile
        isOpen={isOpen}
        handleFilterModal={handleFilterModal}
      />
      <div className="w-full flex justify-between md:hidden text-sm pb-6">
        <p>medical centers</p>
        <p onClick={handleFilterModal} className="text-primary cursor-pointer">
          filter
        </p>
      </div>
      <ClinicList maxheight={maxheight} />
    </div>
  );
}
