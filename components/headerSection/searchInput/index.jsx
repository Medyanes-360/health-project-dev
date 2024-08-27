"use client";
import AutoCompleteInput from "@/globalElements/autoCompleteInput";
import ButtonComponent from "@/globalElements/Button";
import Image from "next/image";
import { useState } from "react";

const HeaderSectionSearchInput = (props) => {
  const data = props.data;
  const [searchValue, setSearchValue] = useState("");
  const [locationValue, setLocationValue] = useState("");

  const autoFillHandler = (e) => {
    setSearchValue(e.currentTarget.textContent);
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
      {" "}
      <div
        style={{ width: "max-content" }}
        className="flex  border bg-white  rounded-md"
      >
        <div className="h-16 px-1 py-1">
          <div class="flex rounded-lg h-full p-2    ">
            <div className="flex  min-w-max  ">
              <Image
                className="mr-2"
                src="/assets/icons/searchIcon.svg"
                alt=""
                width={24}
                height={24}
              />
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.currentTarget.value)}
                style={{
                  // !! width'inin placeholder'ın lengthine eşit olması için aşağıdaki prop'u veriyoruz. ch = character width demek.
                  width: `${"Enter the disease, hospital or doctor".length}ch`,
                }}
                className="w-full min-w-fit "
                placeholder={"Enter the disease, hospital or doctor"}
                type="text"
                class="  w-full h-full border-none outline-none py-0 pl-2 block   -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              />
              {/* <AutoCompleteInput
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.currentTarget.value);
                }}
                placeholder="Enter the disease, hospital or doctor"
              /> */}
            </div>
            <div className="relative flex mr-2 border-l-2 pl-2 w-full">
              <Image
                src="/assets/icons/locationIcon.svg"
                alt=""
                width={24}
                height={24}
              />
              <AutoCompleteInput
                value={location}
                onChange={(e) => {
                  setLocationValue(e.currentTarget.value);
                }}
                placeholder="Your Location"
              />
            </div>

            <ButtonComponent
              onClick={submitHandler}
              title="Search"
              style={{
                background:
                  "linear-gradient(325.39deg, #4EC9E5 6.94%, #2EAECB 94.28%)",
              }}
              className="bg-primary  rounded-sm  text-white"
            >
              Search
            </ButtonComponent>
          </div>
        </div>
      </div>
      <small className="mt-1 text-sm">
        Suggestion:
        {data.suggestions.map((suggestion, index) => {
          return (
            <>
              {" "}
              <span
                onClick={autoFillHandler}
                className="text-black hover:text-primary cursor-pointer"
                key={index}
              >
                {" "}
                {suggestion}
              </span>
              {index == data.suggestions.length - 1 ? "" : ","}
            </>
          );
        })}
      </small>
    </>
  );
};
export default HeaderSectionSearchInput;
