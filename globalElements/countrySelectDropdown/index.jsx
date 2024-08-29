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

  return (
    <div className="relative inline-block text-left">
      <div className="">
        <button
          type="button"
          className="inline-flex items-center overflow-hidden justify-between w-32 border-gray-300 shadow-sm px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={toggleDropdown}
        >
          {selectedCountry ? (
            <>
              <Image
                width={25}
                height={25}
                src={`/assets/countryFlags/${selectedCountry.code2l}.png`}
                alt={selectedCountry.name}
                className="w-5 h-5 mr-2"
              />
              {countryNames && (
                <span
                  style={{
                    whiteSpace: "nowrap",
                    maxWidth: "75%",
                    overflow: "hidden",
                  }}
                  title={selectedCountry.name}
                >
                  {selectedCountry.name}
                </span>
              )}
            </>
          ) : (
            <span
              title={"Select a country"}
              style={{
                whiteSpace: "nowrap",
                maxWidth: "75%",
                overflow: "hidden",
              }}
            >
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
                  src={`/assets/countryFlags/${country.code2l}.png`}
                  alt={country.name}
                  className="w-5 h-5 mr-2"
                />
                <span>{country.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default CountrySelectDropdown;
