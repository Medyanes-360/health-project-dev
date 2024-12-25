"use client";
import { Formik, Form } from "formik";
import ButtonComponent from "@/globalElements/Button";
import * as Yup from "yup";
import { Checkbox } from "@/globalElements/checkbox";
import { useState } from "react";

export default function LanguageSelector() {
  const validationSchema = Yup.object().shape({
    english: Yup.boolean(),
    türkçe: Yup.boolean(),
    français: Yup.boolean(),
    deutsch: Yup.boolean(),
    español: Yup.boolean(),
  });

  const [languages, setLanguages] = useState([
    { id: 1, name: "English", selected: false },
    { id: 2, name: "Türkçe", selected: false },
    { id: 3, name: "Français", selected: false },
    { id: 4, name: "Deutsch", selected: false },
    { id: 5, name: "Español", selected: false },
  ]);

  const toggleLanguage = (id) => {
    setLanguages((prevLanguages) =>
      prevLanguages.map((lang) =>
        lang.id === id ? { ...lang, selected: !lang.selected } : lang
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLanguages((prevLanguages) =>
      prevLanguages.map((lang) => ({ ...lang, selected: false }))
    );
  };

  return (
    <div className="py-8 px-3 font-inter flex flex-col gap-8 bg-white rounded-[32px]">
      <h1 className="text-xl font-semibold">Languages</h1>
      <p className="font-medium">
        Only add languages in which your clinic can deal with patients.
      </p>
      <Formik
        initialValues={{
          english: false,
          türkçe: false,
          français: false,
          deutsch: false,
          español: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted", values);
          setSubmitted(true);
          resetForm(); // Reset form after submission
        }}
      >
        {({ values, handleSubmit, handleChange }) => {
          console.log(values);

          return (
            <Form
              onSubmit={handleSubmit}
              className="flex w-full flex-col items-center gap-8"
            >
              <div className="flex w-full md:items-center flex-wrap gap-8 flex-col md:flex-row">
                <div className=" flex gap-3 ">
                  <Checkbox name="english" onChange={handleChange} />
                  <p className="select-none" htmlFor="english">
                    English
                  </p>
                </div>
                <div className=" flex gap-3 ">
                  <Checkbox name="türkçe" onChange={handleChange} />
                  <p className="select-none" htmlFor="türkçe">
                    Türkçe
                  </p>
                </div>
                <div className=" flex gap-3 ">
                  <Checkbox name="français" onChange={handleChange} />
                  <p className="select-none" htmlFor="français">
                    Français
                  </p>
                </div>
                <div className=" flex gap-3 ">
                  <Checkbox name="deutsch" onChange={handleChange} />
                  <p className="select-none" htmlFor="deutsch">
                    Deutsch
                  </p>
                </div>
                <div className=" flex gap-3 ">
                  <Checkbox name="español" onChange={handleChange} />
                  <p className="select-none" htmlFor="español">
                    Español
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="w-full flex justify-end">
                <ButtonComponent
                  type="submit"
                  className="bg-primary !py-2 !px-4 text-white !rounded-lg !w-[174px] select-none"
                >
                  <p className="text-sm">save</p>
                </ButtonComponent>
              </div>

              {/* Display confirmation message after form submission */}
            </Form>
          );
        }}
      </Formik>
      {/* <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="grid grid-cols-6 gap-4 w-[734px] p-1">
          {languages.map((language) => (
            <label className="flex items-center gap-2" key={language.id}>
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

        <ButtonComponent
          type="submit"
          className="bg-primary !py-2 !px-4 text-white !rounded-lg !w-[174px]  self-end"
        >
          <p className="text-sm">save</p>
        </ButtonComponent>
      </form> */}
    </div>
  );
}
