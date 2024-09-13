"use client";
import AutoCompleteInput from "@/globalElements/autoCompleteInput";
import CountrySelectDropdown from "@/globalElements/countrySelectDropdown";
import { Country } from "country-state-city";
import Image from "next/image";
import { useState } from "react";

const data = [
  // Disease Types
  { name: "Oncology", type: "disease" },
  { name: "Endocrinology", type: "disease" },
  { name: "Cardiology", type: "disease" },
  { name: "Neurology", type: "disease" },
  { name: "Dermatology", type: "disease" },
  { name: "Gastroenterology", type: "disease" },
  { name: "Hematology", type: "disease" },
  { name: "Nephrology", type: "disease" },
  { name: "Obstetrics", type: "disease" },
  { name: "Ophthalmology", type: "disease" },
  { name: "Orthopedics", type: "disease" },
  { name: "Pediatrics", type: "disease" },
  { name: "Psychiatry", type: "disease" },
  { name: "Pulmonology", type: "disease" },
  { name: "Rheumatology", type: "disease" },
  { name: "Urology", type: "disease" },
  { name: "Radiology", type: "disease" },
  { name: "Pathology", type: "disease" },
  { name: "Surgery", type: "disease" },
  { name: "Allergy and Immunology", type: "disease" },
  { name: "Genetics", type: "disease" },
  { name: "Endodontics", type: "disease" },
  { name: "Prosthodontics", type: "disease" },
  { name: "Periodontics", type: "disease" },
  { name: "Orthodontics", type: "disease" },

  // Hospitals
  { name: "Medova Hastanesi Ankara", type: "hospital" },
  { name: "CDT Hastanesi", type: "hospital" },
  { name: "Acıbadem Hastanesi", type: "hospital" },
  { name: "Memorial Hastanesi", type: "hospital" },
  { name: "Anadolu Sağlık Merkezi", type: "hospital" },
  { name: "Medical Park Hastanesi", type: "hospital" },
  { name: "Liv Hospital", type: "hospital" },
  { name: "Kolan Hastanesi", type: "hospital" },
  { name: "Florence Nightingale Hastanesi", type: "hospital" },
  { name: "Özel Çağ Hastanesi", type: "hospital" },
  { name: "Bilkent City Hospital", type: "hospital" },
  { name: "Hacettepe University Hospital", type: "hospital" },
  { name: "GATA Haydarpaşa", type: "hospital" },
  { name: "Amerikan Hastanesi", type: "hospital" },
  { name: "Başkent Üniversitesi Hastanesi", type: "hospital" },
  { name: "İstanbul Tıp Fakültesi", type: "hospital" },
  { name: "Şişli Etfal Hastanesi", type: "hospital" },
  { name: "Dr. Sadi Konuk Hastanesi", type: "hospital" },
  { name: "Kartal Koşuyolu Hastanesi", type: "hospital" },
  { name: "Maltepe Üniversitesi Hastanesi", type: "hospital" },
  { name: "Avrasya Hospital", type: "hospital" },
  { name: "LIV Ankara", type: "hospital" },
  { name: "Akay Hastanesi", type: "hospital" },
  { name: "VM Medical Park Ankara", type: "hospital" },
  { name: "Koru Ankara Hastanesi", type: "hospital" },

  // Doctors
  { name: "Mehmet OZ", type: "doctor" },
  { name: "Rasim Vural", type: "doctor" },
  { name: "Ayşe Yılmaz", type: "doctor" },
  { name: "Ahmet Demir", type: "doctor" },
  { name: "Elif Sarı", type: "doctor" },
  { name: "Cemal Yıldırım", type: "doctor" },
  { name: "Hüseyin Kılıç", type: "doctor" },
  { name: "Zeynep Çelik", type: "doctor" },
  { name: "Ali Can", type: "doctor" },
  { name: "Fatma Şahin", type: "doctor" },
  { name: "Murat Kaya", type: "doctor" },
  { name: "Gizem Aksoy", type: "doctor" },
  { name: "Emre Yavuz", type: "doctor" },
  { name: "Deniz Kurt", type: "doctor" },
  { name: "Serkan Korkmaz", type: "doctor" },
  { name: "Derya Ergin", type: "doctor" },
  { name: "Fikret Toprak", type: "doctor" },
  { name: "Merve Tuncer", type: "doctor" },
  { name: "Özgür Arslan", type: "doctor" },
  { name: "Pelin Acar", type: "doctor" },
  { name: "Cem Kaya", type: "doctor" },
  { name: "Nurdan Çelik", type: "doctor" },
  { name: "Yasemin Şahin", type: "doctor" },
  { name: "Barış Demir", type: "doctor" },
  { name: "Selin Öztürk", type: "doctor" },
];

const defaultCountry = "TR";

const HeaderbarSelectField = ({ flags, countryNames, placeholder }) => {
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
        />
      </div>
    </form>
  );
};

export default HeaderbarSelectField;
