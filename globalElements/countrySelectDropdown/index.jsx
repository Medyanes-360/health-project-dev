import { useEffect, useState } from "react";
import { Country } from "country-state-city";

const CountrySelectDropdown = ({ countryNames = true, toLeft, toRight }) => {
  //  country data'mızı alıyoruz:
  const countries = Country.getAllCountries();

  const [isOpen, setIsOpen] = useState(false);

  //WARN selected country defaulted to türkiye
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((country) => country.isoCode == "TR")
  );
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
  // TODO: window'a click yapıldığında açık olan dropdown kapatılacak. (useEffect ile window defined mı diye kontrol et)
  // window.addEventListener("click", (e) => {
  //   setIsOpen(false);
  // });
  useEffect(() => {
    if (window != undefined) {
      window.addEventListener("click", (e) => {
        setOpen(false);
      });
    }
  }, []);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        minWidth: "75px !important", //flag width
        width: "fit-content",
        maxWidth: "150px",
      }}
      className="relative  w-full  inline-block text-left"
    >
      <div className="w-full">
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex w-full   items-center   overflow-hidden justify-between  border-gray-300 shadow-sm px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          {selectedCountry ? (
            <>
              <span className="text-3xl">{selectedCountry.flag}</span>
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

      {isOpen && countries && (
        <div
          style={{
            width: "300px",
            maxHeight: "15rem ",
            overflowX: "scroll",
            zIndex: "500",
          }}
          className={`${
            (toRight && "right-0") || (toLeft && "left-0")
          }  origin-top-right absolute      mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
        >
          <div className="   w-full  mt-2  px-2  ">
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
                onClick={() => handleSelect(country)}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                <span className="text-3xl ">{country.flag}</span>

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
