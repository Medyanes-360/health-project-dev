"use client";
import { diseaseDoctorHospitalMockData } from "@/data/mocks/searchInputMockData";
import AutoCompleteInput from "@/globalElements/autoCompleteInput";
import CountrySelectDropdown from "@/globalElements/countrySelectDropdown";
import { Country } from "country-state-city";
import Image from "next/image";
import { useState } from "react";

const defaultCountry = "TR";

const HeaderbarSelectField = ({ flags, countryNames, placeholder }) => {
  const data = diseaseDoctorHospitalMockData;
  const countries = Country.getAllCountries();
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((country) => country.isoCode == defaultCountry)
  );
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    e.preventDefault();
    console.log({
      selectedCountry: selectedCountry,

      searchValue: searchValue,
    });
  };

  return (
    // TODO: Grid olsun ve proplarla ayarlansın, Flag'lerin kalitesi, input width'i , dropdownlar focus gittiğinde otomatik kapanacak ,
    <form
      onSubmit={handleSubmit}
      className="bg-white h-11  flex items-center  border rounded-md py-2 "
    >
      <CountrySelectDropdown
        countries={countries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        onChange={setSelectedCountry}
        flags={flags}
        countryNames={countryNames}
        toLeft
      />
      <div className="flex w-full  border-l pl-2 ">
        <Image
          src="/assets/icons/searchIcon.svg"
          alt=""
          width={24}
          height={24}
        />

        <AutoCompleteInput
          inputstyle={{}}
          placeholder={placeholder}
          data={data}
          value={searchValue}
          setValue={setSearchValue}
          inputclassname={"!text-sm"}
        />
      </div>
    </form>
  );
};

export default HeaderbarSelectField;
