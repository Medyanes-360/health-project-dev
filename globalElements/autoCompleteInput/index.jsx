import { useEffect, useRef, useState } from "react";

export default function AutoCompleteInput({
  data,
  value,
  setValue,
  placeholder,
  toRight,
  toLeft,
  inputstyle,
  inputclassname,
}) {
  const dropdownRef = useRef(null);

  const [open, setOpen] = useState(false);

  const [options, setOptions] = useState(data);
  const [inputValue, setInputValue] = useState("");
  const changeHandler = (e) => {
    //filter data
    //eğer kullanıcı dropdown'da olan bir itemı seçmeyip kendisi aratmışsa type 'false' döner.
    setValue({ name: e.currentTarget.value, type: false });
    const newOptions = data.filter((option) =>
      option.name.toLowerCase().includes(e.currentTarget.value.toLowerCase())
    );
    setOptions(newOptions);

    setOpen(true);
  };
  const handleSelect = (selectedValue) => {
    setValue(selectedValue);
    setOpen(false);
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
    <div ref={dropdownRef} className="  relative w-full  ">
      <div className="relative flex      items-center w-full h-full p-0 m-0 ">
        <div className="flex overflow-hidden w-min">
          {/* //input'un widthini placeholderla eşitlemek için: */}
          <span
            style={{ ...inputstyle }}
            className={`pl-2 text-nowrap pr-2  z-[-50000] block ${inputclassname}`}
          >
            {placeholder}
          </span>
          <input
            style={{
              maxWidth: "100%!important",
              ...inputstyle,
            }}
            placeholder={placeholder}
            type="text"
            value={value.name}
            onChange={changeHandler}
            className={` w-full h-full absolute top-0 border-none outline-none py-0 pl-2 pr-2 block  ${inputclassname}  `}
          />
        </div>
      </div>

      {open && options.length > 0 && (
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
            {options.slice(0, 20).map((option, index) => (
              <button
                type="button"
                onClick={(e) => handleSelect(option)}
                key={index}
                className="flex  items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                <span className="pl-2">
                  {option.name.slice(
                    0,
                    option.name
                      .toLowerCase()
                      .indexOf(value.name.trim().toLowerCase())
                  )}
                  <span className="font-semibold">
                    {option.name.slice(
                      option.name
                        .toLowerCase()
                        .indexOf(value.name.trim().toLowerCase()),
                      option.name
                        .toLowerCase()
                        .indexOf(value.name.trim().toLowerCase()) +
                        value.name.trim().length
                    )}
                  </span>
                  {option.name.slice(
                    option.name
                      .toLowerCase()

                      .indexOf(value.name.trim().toLowerCase()) +
                      value.name.trim().length
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
