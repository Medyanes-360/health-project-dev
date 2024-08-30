import { countries as countriesData } from "@/data/countries";
import Image from "next/image";
import { useState } from "react";

const CountrySelectDropdown = ({ countryNames = true, toLeft, toRight }) => {
  //  country data'mızı alıyoruz:
  const countries = countriesData;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };
  window.addEventListener("click", (e) => {
    setIsOpen(false);
  });

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        minWidth: "75px !important", //flag width
        width: "fit-content",
        maxWidth: "150px",
      }}
      className="relative w-full  inline-block text-left"
    >
      <div className="w-full">
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex w-full   items-center   overflow-hidden justify-between  border-gray-300 shadow-sm px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          {selectedCountry ? (
            <>
              <Image
                width={30}
                height={20}
                src={`/assets/countryFlags/${selectedCountry.code2l}.svg`}
                alt={selectedCountry.name}
                className=""
              />
              {countryNames && (
                <span
                  style={{
                    whiteSpace: "nowrap",
                    maxWidth: "75%",
                    overflow: "hidden",
                    paddingLeft: ".25rem",
                  }}
                  title={selectedCountry.name}
                >
                  {selectedCountry.name}
                </span>
              )}
            </>
          ) : (
            <span title={"Select a country"} style={{}}>
              Country
            </span>
          )}
          <svg
            className="-mr-1 ml-2 h-5 w-4"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="#5E6670"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          style={{ maxHeight: "15rem ", overflow: "scroll", zIndex: "500" }}
          className={`${
            (toRight && "right-0") || (toLeft && "left-0")
          }  origin-top-right absolute    mt-2 min-w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
        >
          <div className=" py-1">
            {countries.map((country) => (
              <button
                key={country.name}
                onClick={() => handleSelect(country)}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                <Image
                  width={25}
                  height={25}
                  src={`/assets/countryFlags/${country.code2l}.svg`}
                  alt={country.name}
                  className=" "
                />
                <span className="pl-2">{country.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default CountrySelectDropdown;
