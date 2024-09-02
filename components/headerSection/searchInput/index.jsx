"use client";
import AutoCompleteInput from "@/globalElements/autoCompleteInput";

import ButtonComponent from "@/globalElements/Button";
import Image from "next/image";
import { useState } from "react";
import AutoCompleteLocationInput from "./autoCompleteLocationInput";

const diseaseDoctorHospitalData = [
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
const popularSuggestions = [
  { name: "Oncology", type: "disease" },
  { name: "Endocrinology", type: "disease" },
  { name: "Infertility", type: "disease" },
  { name: "Mental Health", type: "disease" },
  { name: "Cardiology", type: "disease" },
];
const HeaderSectionSearchInput = () => {
  const suggestions = popularSuggestions;
  const diseaseSearchFieldData = diseaseDoctorHospitalData;
  const [searchValue, setSearchValue] = useState("");
  const [locationValue, setLocationValue] = useState("");

  const autoFillSuggestionHandler = (suggestion) => {
    console.log(searchValue);
    setSearchValue(suggestion);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    alert(
      "searched! searchValue: " +
        searchValue +
        ", locationValue: " +
        locationValue
    );
  };
  return (
    <>
      {/* TODO: grid'le böl */}
      <div
        style={{ maxWidth: "750px" }}
        className="flex w-full    border bg-white  rounded-md"
      >
        <div className=" h-full  w-full  sm:h-20 sm:px-1 sm:py-2 sm:pl-3">
          <div className=" w-full   grid grid-cols-6  grid-flow-col gap-0 justify-between  rounded-lg h-full px-1 sm:px-2  py-1    ">
            <div className="  col-span-5 sm:col-span-3 flex   w-full  ">
              <Image
                className="mr-2 hidden sm:block "
                src="/assets/icons/searchIcon.svg"
                alt="search"
                width={24}
                height={24}
              />
              {/* <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.currentTarget.value)}
                style={{
                  // !! width'inin placeholder'ın lengthine eşit olması için aşağıdaki prop'u veriyoruz. ch = character width demek.

                  width: `${"Enter the disease, hospital or doctor".length}ch`,
                }}
                placeholder={"Enter the disease, hospital or doctor"}
                type="text"
                className="pl-2 sm:pl-0 min-w-full pr-2  sm:w-max-full sm:pr-12   sm:text-base text-[10px]  h-full border-none outline-none py-0    text-sm"
              />{" "} */}
              <AutoCompleteInput
                style={{}}
                placeholder={"Enter the disease, hospital or doctor"}
                data={diseaseSearchFieldData}
                value={searchValue}
                setValue={setSearchValue}
              />
            </div>
            <div className="hidden sm:flex col-span-2 relative  mr-2 border-l pl-2 w-full">
              <Image
                src="/assets/icons/locationIcon.svg"
                alt=""
                width={24}
                height={24}
              />
              <AutoCompleteLocationInput
                includeCities
                style={{ width: "100%", paddingRight: "2rem" }}
                value={locationValue}
                onChange={(e) => {
                  setLocationValue(e.currentTarget.value);
                }}
                placeholder="Your Location"
              />
            </div>

            <div className="col-span-1 ">
              <ButtonComponent
                onClick={submitHandler}
                title="Search"
                style={{
                  background:
                    "linear-gradient(325.39deg, #4EC9E5 6.94%, #2EAECB 94.28%)",
                }}
                className=" w-full sm:flex hidden text-base font-[600] bg-primary h-full   !rounded-[4px] px-6   text-white"
              />

              <ButtonComponent
                onClick={submitHandler}
                style={{
                  background:
                    "linear-gradient(325.39deg, #4EC9E5 6.94%, #2EAECB 94.28%)",
                }}
                className="  sm:hidden w-full  !py-3 h-full flex  text-base font-[600] bg-primary    !rounded-[4px] !px-3   text-white"
              >
                <Image
                  className="filter  brightness-0 invert"
                  src="/assets/icons/searchIcon.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
      <small className="mt-6 text-left text-sm">
        Suggestion:
        {suggestions.map((suggestion, index) => {
          return (
            <span key={index}>
              <span
                onClick={() => {
                  autoFillSuggestionHandler(suggestion);
                }}
                className="text-black hover:text-primary cursor-pointer"
              >
                {" "}
                {suggestion.name}
              </span>
              {index == suggestions.length - 1 ? "" : ","}
            </span>
          );
        })}
      </small>
    </>
  );
};
export default HeaderSectionSearchInput;
