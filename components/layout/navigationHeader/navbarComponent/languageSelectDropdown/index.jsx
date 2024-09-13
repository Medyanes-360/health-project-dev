import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const languages = [
  {
    name: "English",
    languageCode: "en",
    countryCode: "US",
  },
  { name: "Türkçe", languageCode: "tr", countryCode: "TR" },
  { name: "Deutsch", languageCode: "de", countryCode: "DE" },
];

const LanguageSelectDropdown = ({ toLeft, toRight }) => {
  //  country data'mızı alıyoruz:
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  //default olarak english seçili

  // HTML'den alma:
  // document.querySelector("html").lang
  // browser'dan user'ın en çok tercih ettiği dili alma:
  // navigator.language
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "English",
    countryCode: "US",
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (language) => {
    setSelectedLanguage(language);
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
      // onClick={(e) => {
      //   e.stopPropagation();
      // }}
      className="relative min-w-fit  inline-block text-left"
    >
      <div className="">
        <button
          type="button"
          className="inline-flex max-w-[150px]  items-center overflow-hidden justify-between w-full border-gray-300 shadow-sm px-2 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={toggleDropdown}
        >
          {selectedLanguage ? (
            <>
              <Image
                width={24}
                height={16}
                src={`/assets/countryFlags/${selectedLanguage.countryCode}.WEBP`}
                alt={selectedLanguage.name}
                className="mr-1 "
              />

              <span
                style={{
                  whiteSpace: "nowrap",
                  maxWidth: "80%",
                  overflow: "hidden",
                }}
                title={selectedLanguage.name}
              >
                {selectedLanguage.name}
              </span>
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
              Language
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
            {languages.map((language) => (
              <button
                key={language.name}
                onClick={() => handleSelect(language)}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                <Image
                  width={30}
                  height={20}
                  src={`/assets/countryFlags/${language.countryCode}.WEBP`}
                  alt={language.name}
                  className="mr-2 my-1"
                />
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default LanguageSelectDropdown;
