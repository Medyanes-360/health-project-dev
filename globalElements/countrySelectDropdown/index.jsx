import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CountrySelectDropdown = ({
  setSelectedCountry,
  selectedCountry,
  countries,
  countryNames = true,
  toLeft,
  toRight,
}) => {
  //  country data'mızı alıyoruz:
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleFiltering = (e) => {
    setSearchValue(e.currentTarget.value);
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredCountries(filtered);
  };
  const handleSelect = (country) => {
    setSelectedCountry(country);
    setFilteredCountries(countries);
    setSearchValue("");
    setIsOpen(false);
  };
  useEffect((e) => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (document != undefined) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={dropdownRef}
      // onClick={(e) => e.stopPropagation()}

      className="relative  w-[120px]  inline-block text-left"
    >
      <div className="w-full ">
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex   w-full py-2 h-full  overflow-hidden  items-center    justify-center   px-2  rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          {selectedCountry ? (
            <>
              {" "}
              <Image
                width={30}
                height={20}
                alt={selectedCountry.isoCode}
                src={`/assets/countryFlags/${selectedCountry.isoCode}.WEBP`}
              />
              {countryNames && (
                <span
                  className=" overflow-hidden pl-[0.25rem]"
                  title={selectedCountry.name}
                >
                  {selectedCountry.isoCode}
                </span>
              )}
            </>
          ) : (
            <span title={"Select a country"}>Country</span>
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

      {isOpen && countries && (
        <div
          className={`${
            (toRight && "right-0") || (toLeft && "left-0")
          } w-[300px] max-h-[15rem] overflow-x-scroll z-[500] origin-top-right absolute      mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
        >
          <div className=" bg-white   w-full  mt-2  px-2  ">
            <input
              value={searchValue}
              onChange={handleFiltering}
              className=" w-full outline-none p-2  text-sm  border rounded-md  "
              type="text"
              placeholder="Search.."
            />
          </div>
          <div className=" py-1">
            {filteredCountries.map((country) => (
              <button
                key={country.isoCode}
                title={country.name}
                onClick={() => handleSelect(country)}
                className="flex items-center w-full truncate   px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                <Image
                  width={32}
                  height={24}
                  alt={country.isoCode}
                  src={`/assets/countryFlags/${country.isoCode}.WEBP`}
                />

                <span className="pl-2">
                  {country.name.slice(
                    0,
                    country.name
                      .toLowerCase()

                      .indexOf(searchValue.trim().toLowerCase())
                  )}
                  <span className="font-semibold">
                    {country.name.slice(
                      country.name
                        .toLowerCase()
                        .indexOf(searchValue.trim().toLowerCase()),
                      country.name
                        .toLowerCase()
                        .indexOf(searchValue.trim().toLowerCase()) +
                        searchValue.trim().length
                    )}
                  </span>
                  {country.name.slice(
                    country.name
                      .toLowerCase()

                      .indexOf(searchValue.trim().toLowerCase()) +
                      searchValue.trim().length
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default CountrySelectDropdown;
