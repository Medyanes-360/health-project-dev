import { useEffect, useState } from "react";
import { Country, State } from "country-state-city";

const AutoCompleteInput = ({
  placeholder,
  //TODO: cities eklenebilsin, arama state,city,country tümünde çalışsın
  includeStates = false,
  includeCities = false,
  onChange,
  toRight,
  style,
  toLeft,
}) => {
  const states = State.getAllStates();
  const [dataLoading, setDataLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [options, setOptions] = useState(states);

  const handleSelect = (selectedState) => {
    setValue(selectedState.name);
    setOpen(false);
  };

  const changeHandler = (e) => {
    const newOptions = states.filter((option) =>
      option.name.toLowerCase().includes(e.currentTarget.value.toLowerCase())
    );

    setOptions(newOptions);
    setValue(e.currentTarget.value);
    setOpen(true);
  };
  // TODO: window'a click yapıldığında açık olan dropdown kapatılacak. (useEffect ile window defined mı diye kontrol et)
  // window.addEventListener("click", (e) => {
  //   setOpen(false);
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
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="relative w-full  "
    >
      <input
        style={{
          minWidth: `${placeholder.length}ch`,
          ...style,
        }}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e);
          changeHandler(e);
        }}
        className="  w-full h-full border-none outline-none py-0 pl-2 block   -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
      />
      {open && (
        <div
          style={{
            right: 0,

            maxHeight: "15rem ",
            overflow: "scroll",
            zIndex: "500",
          }}
          a
          className={`${
            (toRight && "right-0") || (toLeft && "left-0")
          }    left-0 min-w-max   absolute       w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
        >
          <div className="  py-1 ">
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
                      .indexOf(value.trim().toLowerCase())
                  )}
                  <span className="font-semibold">
                    {option.name.slice(
                      option.name
                        .toLowerCase()
                        .indexOf(value.trim().toLowerCase()),
                      option.name
                        .toLowerCase()
                        .indexOf(value.trim().toLowerCase()) +
                        value.trim().length
                    )}
                  </span>
                  {option.name.slice(
                    option.name
                      .toLowerCase()

                      .indexOf(value.trim().toLowerCase()) + value.trim().length
                  )}
                </span>
                ,
                <span className="pl-2">
                  {Country.getCountryByCode(option.countryCode).name}
                </span>
                <span className="pl-2 text-xl">
                  {Country.getCountryByCode(option.countryCode).flag}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoCompleteInput;
