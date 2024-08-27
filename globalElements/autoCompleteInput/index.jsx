import { countries as countriesData } from "@/data/countries";
import Image from "next/image";
import { useState } from "react";

const AutoCompleteInput = ({
  placeholder,

  onChange,
  toRight,
  toLeft,
}) => {
  const countries = countriesData;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [options, setOptions] = useState(countries);
  const handleSelect = (e) => {
    console.log(e);
  };

  const changeHandler = (e) => {
    const newOptions = countries.filter((option) =>
      option.name.toLowerCase().includes(e.currentTarget.value.toLowerCase())
    );

    setOptions(newOptions);
    setValue(e.currentTarget.value);
    setOpen(true);
  };
  return (
    <div className="relative   ">
      <input
        onFocus={() => {
          setOpen(true);
        }}
        onBlur={() => {
          setOpen(false);
        }}
        style={{
          width: `${placeholder.length}ch`,
        }}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e);
          changeHandler(e);
        }}
        class="  w-full h-full border-none outline-none py-0 pl-2 block   -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
      />
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
          }   top-0 left-0 min-w-max  absolute       w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
        >
          <div className="  py-1 ">
            {options.map((option) => (
              <button
                key={option.name}
                onClick={() => handleSelect(option)}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                <Image
                  width={25}
                  height={25}
                  src={`/assets/countryFlags/${option.code2l}.png`}
                  alt={option.name}
                  className="w-5 h-5 mr-2"
                />
                <span>{option.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoCompleteInput;
