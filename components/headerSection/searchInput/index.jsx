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
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.currentTarget.value)}
                style={{
                  // !! width'inin placeholder'ın lengthine eşit olması için aşağıdaki prop'u veriyoruz. ch = character width demek.

                  width: `${"Enter the disease, hospital or doctor".length}ch`,
                }}
                placeholder={"Enter the disease, hospital or doctor"}
                type="text"
                className="pl-2 sm:pl-0 min-w-full pr-2  sm:w-max-full sm:pr-12   sm:text-base text-[10px]  h-full border-none outline-none py-0    text-sm"
              />
              {/* <AutoCompleteInput
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.currentTarget.value);
                }}
                placeholder="Enter the disease, hospital or doctor"
              /> */}
            </div>
            <div className="hidden sm:flex col-span-2 relative  mr-2 border-l pl-2 w-full">
              <Image
                src="/assets/icons/locationIcon.svg"
                alt=""
                width={24}
                height={24}
              />
              <AutoCompleteInput
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
        {data.suggestions.map((suggestion, index) => {
          return (
            <span key={index}>
              <span
                onClick={autoFillHandler}
                className="text-black hover:text-primary cursor-pointer"
              >
                {" "}
                {suggestion}
              </span>
              {index == data.suggestions.length - 1 ? "" : ","}
            </span>
          );
        })}
      </small>
    </>
  );
};
export default HeaderSectionSearchInput;
