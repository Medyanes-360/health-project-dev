import { useEffect, useRef, useState } from "react";

const data = [
  // Disease Types
  { name: "Oncology", type: "disease" },
  { name: "Endocrinology", type: "disease" },
  { name: "Cardiology", type: "disease" },
  { name: "Neurology", type: "disease" },
  { name: "Dermatology", type: "disease" },
  { name: "Gastroenterology", type: "disease" },
  { name: "Hematology", type: "disease" },
  { name: "Nephrology", type: "disease" },
  { name: "Obstetrics", type: "disease" },
  { name: "Ophthalmology", type: "disease" },
  { name: "Orthopedics", type: "disease" },
  { name: "Pediatrics", type: "disease" },
  { name: "Psychiatry", type: "disease" },
  { name: "Pulmonology", type: "disease" },
  { name: "Rheumatology", type: "disease" },
  { name: "Urology", type: "disease" },
  { name: "Radiology", type: "disease" },
  { name: "Pathology", type: "disease" },
  { name: "Surgery", type: "disease" },
  { name: "Allergy and Immunology", type: "disease" },
  { name: "Genetics", type: "disease" },
  { name: "Endodontics", type: "disease" },
  { name: "Prosthodontics", type: "disease" },
  { name: "Periodontics", type: "disease" },
  { name: "Orthodontics", type: "disease" },

  // Hospitals
  { name: "Medova Hastanesi Ankara", type: "hospital" },
  { name: "CDT Hastanesi", type: "hospital" },
  { name: "Acıbadem Hastanesi", type: "hospital" },
  { name: "Memorial Hastanesi", type: "hospital" },
  { name: "Anadolu Sağlık Merkezi", type: "hospital" },
  { name: "Medical Park Hastanesi", type: "hospital" },
  { name: "Liv Hospital", type: "hospital" },
  { name: "Kolan Hastanesi", type: "hospital" },
  { name: "Florence Nightingale Hastanesi", type: "hospital" },
  { name: "Özel Çağ Hastanesi", type: "hospital" },
  { name: "Bilkent City Hospital", type: "hospital" },
  { name: "Hacettepe University Hospital", type: "hospital" },
  { name: "GATA Haydarpaşa", type: "hospital" },
  { name: "Amerikan Hastanesi", type: "hospital" },
  { name: "Başkent Üniversitesi Hastanesi", type: "hospital" },
  { name: "İstanbul Tıp Fakültesi", type: "hospital" },
  { name: "Şişli Etfal Hastanesi", type: "hospital" },
  { name: "Dr. Sadi Konuk Hastanesi", type: "hospital" },
  { name: "Kartal Koşuyolu Hastanesi", type: "hospital" },
  { name: "Maltepe Üniversitesi Hastanesi", type: "hospital" },
  { name: "Avrasya Hospital", type: "hospital" },
  { name: "LIV Ankara", type: "hospital" },
  { name: "Akay Hastanesi", type: "hospital" },
  { name: "VM Medical Park Ankara", type: "hospital" },
  { name: "Koru Ankara Hastanesi", type: "hospital" },

  // Doctors
  { name: "Mehmet OZ", type: "doctor" },
  { name: "Rasim Vural", type: "doctor" },
  { name: "Ayşe Yılmaz", type: "doctor" },
  { name: "Ahmet Demir", type: "doctor" },
  { name: "Elif Sarı", type: "doctor" },
  { name: "Cemal Yıldırım", type: "doctor" },
  { name: "Hüseyin Kılıç", type: "doctor" },
  { name: "Zeynep Çelik", type: "doctor" },
  { name: "Ali Can", type: "doctor" },
  { name: "Fatma Şahin", type: "doctor" },
  { name: "Murat Kaya", type: "doctor" },
  { name: "Gizem Aksoy", type: "doctor" },
  { name: "Emre Yavuz", type: "doctor" },
  { name: "Deniz Kurt", type: "doctor" },
  { name: "Serkan Korkmaz", type: "doctor" },
  { name: "Derya Ergin", type: "doctor" },
  { name: "Fikret Toprak", type: "doctor" },
  { name: "Merve Tuncer", type: "doctor" },
  { name: "Özgür Arslan", type: "doctor" },
  { name: "Pelin Acar", type: "doctor" },
  { name: "Cem Kaya", type: "doctor" },
  { name: "Nurdan Çelik", type: "doctor" },
  { name: "Yasemin Şahin", type: "doctor" },
  { name: "Barış Demir", type: "doctor" },
  { name: "Selin Öztürk", type: "doctor" },
];

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
          <input
            style={{
              width: `${placeholder.length - 5}ch`,
              maxWidth: "100%!important",
              ...inputstyle,
            }}
            placeholder={placeholder}
            type="text"
            value={value.name}
            onChange={changeHandler}
            className={` w-full h-full border-none outline-none py-0 pl-2 block  ${inputclassname}  `}
          />
        </div>
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
