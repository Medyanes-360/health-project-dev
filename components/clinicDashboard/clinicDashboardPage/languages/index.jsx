"use client";

import { useState } from "react";
import ExtraLargePageContainer from "@/containers/extraLargePageContainer";

export default function LanguageSelector() {
  const [languages, setLanguages] = useState([
    { id: 1, name: "English", selected: false },
    { id: 2, name: "English", selected: false },
    { id: 3, name: "English", selected: false },
    { id: 4, name: "English", selected: false },
    { id: 5, name: "English", selected: false },
    { id: 6, name: "English", selected: false },
    { id: 7, name: "English", selected: false },
    { id: 8, name: "English", selected: false },
    { id: 9, name: "English", selected: false },
    { id: 10, name: "English", selected: false },
    { id: 11, name: "English", selected: false },
    { id: 12, name: "English", selected: false },
    { id: 13, name: "English", selected: false },
    { id: 14, name: "English", selected: false },
    { id: 15, name: "English", selected: false },
    { id: 16, name: "English", selected: false },
    { id: 17, name: "English", selected: false },
    { id: 18, name: "English", selected: false },
    { id: 19, name: "English", selected: false },
    { id: 20, name: "English", selected: false },
    { id: 21, name: "English", selected: false },
    { id: 22, name: "English", selected: false },
    { id: 23, name: "English", selected: false },
    { id: 24, name: "English", selected: false },
    { id: 25, name: "English", selected: false },
    { id: 26, name: "English", selected: false },
    { id: 27, name: "English", selected: false },
    { id: 28, name: "English", selected: false },
    { id: 29, name: "English", selected: false },
    { id: 30, name: "English", selected: false },
  ]);

  const toggleLanguage = (id) => {
    setLanguages((prevLanguages) =>
      prevLanguages.map((lang) =>
        lang.id === id ? { ...lang, selected: !lang.selected } : lang,
      ),
    );
  };

  return (
    <ExtraLargePageContainer>
      <div className="py-8 px-3 font-inter flex flex-col gap-8 bg-white rounded-[32px]">
        <h1 className="text-xl font-semibold">Languages</h1>
        <p className="font-medium">
          Languages Only add languages in which your clinic can deal with
          patients.
        </p>
        <div className="grid grid-cols-6 gap-4 w-[734px] p-1">
          {languages.map((language) => (
            <label key={language.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={language.selected}
                onChange={() => toggleLanguage(language.id)}
                className="form-checkbox size-6 p-2 accent-[#637381]"
              />
              <span className="font-poppins text-sm text-[#212B36]">
                {language.name}
              </span>
            </label>
          ))}
        </div>
        <button className="bg-teal-500 text-white px-4 py-2  hover:bg-teal-600 self-end rounded-lg font-bold w-[174px]">
          save
        </button>
      </div>
    </ExtraLargePageContainer>
  );
}
