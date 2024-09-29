import { useEffect, useRef, useState } from "react";
import { Country, State } from "country-state-city";
import Image from "next/image";

// value ve setValue input dışında tutulan useState'in değerleri.
// toLeft ve toRight, dropdown'un sağa mı sola mı doğru açılacağını belirtir.
// placeholder inputun placeholder texti.
// inputstyle inputun style'ı.

// eğer user kendisi ülkenin/şehrin adını yazmışsa error border'ı silinir. setValue fonksiyonuyla userın yazdığı isimde olan ülke seçilir.
// eğer user listeden seçmişse yine error silinir. setValue fonksiyonuyla dropdown'dan seçilen ülke seçilir.
// eğer error varsa dönen değer null'dür. error yoksa kullanıcının girdiği/seçtiği değer döner.

const AutoCompleteLocationInput = ({
  placeholder,
  inputclassname,
  toRight,

  setValue,
  inputstyle,
  toLeft,
  locationToDisplayTop = [
    { type: "state", stateIsoCode: "34", countryIsoCode: "TR" },
    // INFO: iso code verilmeli. istanbul'unki "34", Türkiye'ninki "TR". Eğer ülkeyse type ve countryIsoCode, state ise type, stateIsoCode ve countryIsoCode
    // { type: "country", countryIsoCode: "TR" },
    // { type: "country", countryIsoCode: "US" },
  ],
}) => {
  const dropdownRef = useRef(null);
  const states = State.getAllStates();
  const countries = Country.getAllCountries();

  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [options, setOptions] = useState(countries);

  const handleSelect = (selectedLocation) => {
    setInputValue(selectedLocation.name);
    setValue(selectedLocation);
    setError(false);
    setOpen(false);
  };

  const changeHandler = (e) => {
    const newOptions = [];
    newOptions.push(
      ...states.filter(
        (option) =>
          option.name
            .toLowerCase()
            .includes(e.currentTarget.value.toLowerCase()) &&
          !locationToDisplayTop.find(
            (elem) =>
              elem.type == "state" &&
              elem.stateIsoCode == option.isoCode &&
              elem.countryIsoCode == option.countryCode
          )
      ),
      ...countries.filter(
        (option) =>
          option.name
            .toLowerCase()
            .includes(e.currentTarget.value.toLowerCase()) &&
          !locationToDisplayTop.find(
            (elem) =>
              elem.type == "country" && elem.countryIsoCode == option.isoCode
          )
      )
    );
    const selectedOption = options.find(
      (option) =>
        option.name.toLowerCase() == e.currentTarget.value.toLowerCase()
    );

    if (selectedOption) {
      setValue(selectedOption);
      setInputValue(selectedOption.name);
      setError(false);
    }

    if (!selectedOption) {
      setValue(null);
      setError(true);
      setInputValue(e.currentTarget.value);
    }
    setOptions(newOptions);

    setOpen(true);
  };

  useEffect((e) => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
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
      // onClick={(e) => {
      //   e.stopPropagation();
      // }}
      ref={dropdownRef}
      className="relative w-full  "
    >
      <div
        style={{
          borderBottom: "2px solid transparent",
          borderBottomColor:
            error && inputValue.trim() != "" ? "red" : "transparent",
        }}
        className="relative  flex items-center w-full h-full p-0 m-0"
      >
        <input
          style={{
            minWidth: `${placeholder.length}ch`,
            ...inputstyle,
          }}
          placeholder={placeholder}
          type="text"
          value={inputValue}
          onChange={changeHandler}
          className={`   w-full h-full border-none outline-none  py-0 pl-2 block     ${inputclassname}`}
        />
      </div>

      {open && (
        <div
          style={{
            right: 0,

            maxHeight: "15rem ",
            overflow: "scroll",
            zIndex: "500",
          }}
          className={`${
            (toRight && "right-0") || (toLeft && "left-0")
          }    left-0 min-w-max   absolute       w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
        >
          <div className="  py-1 ">
            {locationToDisplayTop.map((elem, index) => {
              let option;
              if (elem.type == "state") {
                option = State.getStateByCodeAndCountry(
                  elem.stateIsoCode,
                  elem.countryIsoCode
                );
              } else {
                option = Country.getCountryByCode(elem.countryIsoCode);
              }

              if (option) {
                return (
                  <button
                    onClick={(e) => handleSelect(option)}
                    key={index}
                    className="flex  items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
                  >
                    {option.name
                      .toLowerCase()
                      .indexOf(inputValue.trim().toLowerCase()) > -1 ? (
                      <span className="pl-2">
                        {option.name.slice(
                          0,
                          option.name
                            .toLowerCase()
                            .indexOf(inputValue.trim().toLowerCase())
                        )}
                        <span className="font-semibold">
                          {option.name.slice(
                            option.name
                              .toLowerCase()
                              .indexOf(inputValue.trim().toLowerCase()),
                            option.name
                              .toLowerCase()
                              .indexOf(inputValue.trim().toLowerCase()) +
                              inputValue.trim().length
                          )}
                        </span>
                        {option.name.slice(
                          option.name
                            .toLowerCase()

                            .indexOf(inputValue.trim().toLowerCase()) +
                            inputValue.trim().length
                        )}
                      </span>
                    ) : (
                      <span className="pl-2">{option.name}</span>
                    )}

                    {/* seçenek bir country mi? öyleyse: */}
                    {option.flag && (
                      <span className="text-xl pl-2">
                        {" "}
                        <Image
                          width={24}
                          height={16}
                          alt={option.isoCode}
                          src={`/assets/countryFlags/${option.isoCode}.WEBP`}
                        />
                      </span>
                    )}
                    {/* seçenek bir state mi? öyleyse: */}
                    {!option.flag && (
                      <>
                        ,
                        <span className="pl-2">
                          {Country.getCountryByCode(option.countryCode).name}
                        </span>
                        <span className="pl-2 text-xl">
                          <Image
                            width={24}
                            height={16}
                            alt={
                              Country.getCountryByCode(option.countryCode)
                                .isoCode
                            }
                            src={`/assets/countryFlags/${
                              Country.getCountryByCode(option.countryCode)
                                .isoCode
                            }.WEBP`}
                          />
                        </span>
                      </>
                    )}
                  </button>
                );
              }
            })}
            {options.slice(0, 20).map((option, index) => (
              <button
                onClick={(e) => handleSelect(option)}
                key={index}
                className="flex  items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                <span className="pl-2">
                  {option.name.slice(
                    0,
                    option.name
                      .toLowerCase()
                      .indexOf(inputValue.trim().toLowerCase())
                  )}
                  <span className="font-semibold">
                    {option.name.slice(
                      option.name
                        .toLowerCase()
                        .indexOf(inputValue.trim().toLowerCase()),
                      option.name
                        .toLowerCase()
                        .indexOf(inputValue.trim().toLowerCase()) +
                        inputValue.trim().length
                    )}
                  </span>
                  {option.name.slice(
                    option.name
                      .toLowerCase()

                      .indexOf(inputValue.trim().toLowerCase()) +
                      inputValue.trim().length
                  )}
                </span>
                {/* seçenek bir country mi? öyleyse: */}
                {option.flag && (
                  <span className="text-xl pl-2">
                    {" "}
                    <Image
                      width={24}
                      height={16}
                      alt={option.isoCode}
                      src={`/assets/countryFlags/${option.isoCode}.WEBP`}
                    />
                  </span>
                )}
                {/* seçenek bir state mi? öyleyse: */}
                {!option.flag && (
                  <>
                    ,
                    <span className="pl-2">
                      {Country.getCountryByCode(option.countryCode).name}
                    </span>
                    <span className="pl-2 text-xl">
                      <Image
                        width={24}
                        height={16}
                        alt={
                          Country.getCountryByCode(option.countryCode).isoCode
                        }
                        src={`/assets/countryFlags/${
                          Country.getCountryByCode(option.countryCode).isoCode
                        }.WEBP`}
                      />
                    </span>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoCompleteLocationInput;
