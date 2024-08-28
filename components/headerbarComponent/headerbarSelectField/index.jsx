"use client";
import { countries as countryData } from "@/data/countries";
import AutoCompleteInput from "@/globalElements/autoCompleteInput";
import CountrySelectDropdown from "@/globalElements/countrySelectDropdown";
import Image from "next/image";
import { useState } from "react";

const HeaderbarSelectField = () => {
  const countries = countryData;

  const [selectedCountry, setSelectedCountry] = useState();
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="bg-white   flex items-center  border-2 py-2 ">
      <CountrySelectDropdown toLeft />
      <div className="flex w-full  border-l-2 pl-2 ">
        <Image
          src="/assets/icons/searchIcon.svg"
          alt=""
          width={24}
          height={24}
        />
        <AutoCompleteInput
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.currentTarget.value);
          }}
          placeholder="Enter the disease, hospital or doctor"
        />
      </div>
    </div>
  );
};

export default HeaderbarSelectField;
