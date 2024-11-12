"use client";
import { treatmentDoctorClinicMockData } from "@/data/mocks/searchInputMockData";
import AutoCompleteInput from "@/globalElements/autoCompleteInput";
import ButtonComponent from "@/globalElements/Button";
import CountrySelectDropdown from "@/globalElements/locationSelectDropdowns/countrySelectDropdown";
import { Country } from "country-state-city";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const defaultCountry = "TR";

const HeaderbarSelectField = ({ flags, countryNames, placeholder }) => {
  const data = treatmentDoctorClinicMockData;

  const countries = Country.getAllCountries();
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((country) => country.isoCode == defaultCountry)
  );
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  console.log(selectedCountry);

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (searchValue.type) {
      case "clinic":
        router.push(`/clinic/${searchValue.url}`);
        break;
      case "doctor":
        router.push(`/doctor/${searchValue.url}`);
        break;
      case "treatment":
        router.push(
          `/clinics/${searchValue.url}?country=${selectedCountry.isoCode}`
        );
        break;
    }
  };

  return (
    // TODO: Grid olsun ve proplarla ayarlansın, Flag'lerin kalitesi, input width'i , dropdownlar focus gittiğinde otomatik kapanacak ,
    <form
      onSubmit={handleSubmit}
      className="bg-white h-11 w-[481px] flex items-center  border rounded-md py-2 "
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
      <div className="flex w-full border-l pl-2 ">
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
        {/* Geçerli bir search value olduğunda butonu gösterir */}
        {searchValue.type && (
          <ButtonComponent
            onClick={handleSubmit}
            style={{
              background:
                "linear-gradient(325.39deg, #4EC9E5 6.94%, #2EAECB 94.28%)",
            }}
            className="mr-2  !py-2 flex text-base font-[600] bg-primary !rounded-[4px] !px-5 text-white"
          >
            <Image
              className="filter brightness-0 invert"
              src="/assets/icons/searchIcon.svg"
              alt=""
              width={16}
              height={16}
            />
          </ButtonComponent>
        )}
      </div>
    </form>
  );
};

export default HeaderbarSelectField;
