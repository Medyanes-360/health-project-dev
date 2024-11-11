"use client";
import AutoCompleteInput from "@/globalElements/autoCompleteInput";
import ButtonComponent from "@/globalElements/Button";
import Image from "next/image";
import { useState } from "react";
import AutoCompleteLocationInput from "./autoCompleteLocationInput";
import {
  popularSuggestionsMockData,
  treatmentDoctorClinicMockData,
} from "@/data/mocks/searchInputMockData";
import { useRouter } from "next/navigation";

const HeaderSectionSearchInput = () => {
  const suggestions = popularSuggestionsMockData;
  const treatmentSearchFieldData = treatmentDoctorClinicMockData;
  const [searchValue, setSearchValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const router = useRouter();

  const autoFillSuggestionHandler = (suggestion) => {
    setSearchValue(suggestion);
  };
  const submitHandler = (e) => {
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
          `/clinics/${searchValue.url}?country=${locationValue.countryCode}`
        );
        break;
    }

    console.log("*************");
    console.log("location:");
    console.log(locationValue);
    console.log("---");
    console.log("search value:");
    console.log(searchValue);
    console.log("*************");
  };
  return (
    <>
      <div
        style={{ maxWidth: "750px" }}
        className="flex w-full    border bg-white  rounded-md"
      >
        <div className=" h-full  w-full  sm:h-20 sm:px-1 sm:py-2 sm:pl-3">
          <div className=" w-full   grid grid-cols-6  grid-flow-col gap-0 justify-between  rounded-lg h-full px-1 sm:px-2  py-1    ">
            <div className=" col-span-5 relative  sm:col-span-3 flex    ">
              <Image
                className=" hidden sm:block absolute left-0 mt-4 z-[1]  bg-white  "
                src="/assets/icons/searchIcon.svg"
                alt="search"
                width={24}
                height={24}
              />

              <AutoCompleteInput
                placeholder={"Enter the treatment, clinic or doctor"}
                data={treatmentSearchFieldData}
                value={searchValue}
                setValue={setSearchValue}
                inputclassname={"text-sm  sm:pl-10  pr-2   sm:text-base "}
              />
            </div>
            <div className="hidden sm:flex   col-span-2 relative  mr-2 border-l pl-2 ">
              <Image
                src="/assets/icons/locationIcon.svg"
                alt=""
                width={24}
                height={24}
                className=" "
              />
              <AutoCompleteLocationInput
                style={{ width: "100%", paddingRight: "2rem" }}
                setValue={setLocationValue}
                placeholder="Your Location"
                inputclassname={"!text-base"}
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
                className=" w-full sm:flex hidden !text-base font-[600] bg-primary h-full   !rounded-[4px] px-6   text-white"
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
