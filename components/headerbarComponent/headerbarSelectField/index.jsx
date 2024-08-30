"use client";
import { countries as countryData } from "@/data/countries";
import AutoCompleteInput from "@/globalElements/autoCompleteInput";
import CountrySelectDropdown from "@/globalElements/countrySelectDropdown";
import Image from "next/image";
import { useState } from "react";

const HeaderbarSelectField = ({ flags, countryNames, placeholder }) => {
  const countries = countryData;

  const [selectedCountry, setSelectedCountry] = useState();
  const [searchValue, setSearchValue] = useState("");
  return (
    // TODO: Grid olsun ve proplarla ayarlansın, Flag'lerin kalitesi, input width'i , dropdownlar focus gittiğinde otomatik kapanacak ,
    <div className="bg-white h-11  flex items-center  border rounded-md py-2 ">
      <CountrySelectDropdown flags={flags} countryNames={countryNames} toLeft />
      <div className="flex w-full  border-l pl-2 ">
        <Image
          src="/assets/icons/searchIcon.svg"
          alt=""
          width={24}
          height={24}
        />
        <AutoCompleteInput
          style={{}}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.currentTarget.value);
          }}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default HeaderbarSelectField;
