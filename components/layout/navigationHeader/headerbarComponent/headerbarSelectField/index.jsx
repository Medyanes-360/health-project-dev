"use client";
import { diseaseDoctorHospitalMockData } from "@/data/mocks/searchInputMockData";
import AutoCompleteInput from "@/globalElements/autoCompleteInput";
import CitySelectDropdown from "@/globalElements/locationSelectDropdowns/citySelectDropdown";
import CountrySelectDropdown from "@/globalElements/locationSelectDropdowns/countrySelectDropdown";
import StateSelectDropdown from "@/globalElements/locationSelectDropdowns/stateSelectDropdown";
import { City, Country, State } from "country-state-city";
import Image from "next/image";
import { useState } from "react";

const defaultCountry = "TR";

const HeaderbarSelectField = ({ flags, countryNames, placeholder }) => {
  const data = diseaseDoctorHospitalMockData;

  const countries = Country.getAllCountries();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    e.preventDefault();
    console.log({
      selectedCountry: selectedCountry,

      searchValue: searchValue,
    });
  };

  const cities = City.getCitiesOfState("TR", "34");
  const states = State.getStatesOfCountry("TR");
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
      <StateSelectDropdown
        setSelectedState={setSelectedState}
        selectedState={selectedState}
        states={states}
      />{" "}
      <CitySelectDropdown
        setSelectedCity={setSelectedCity}
        selectedCity={selectedCity}
        cities={cities}
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
