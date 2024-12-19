"use client";

import { Formik, Form } from "formik";
import ButtonComponent from "@/globalElements/Button";
import * as Yup from "yup";
import { Checkbox } from "@/globalElements/checkbox";

export default function LanguageSelector() {
  const validationSchema = Yup.object().shape({
    english: Yup.boolean(),
    türkçe: Yup.boolean(),
    français: Yup.boolean(),
    deutsch: Yup.boolean(),
    español: Yup.boolean(),
  });

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
              <div className="flex w-full items-center gap-10">
                <div className=" flex gap-2">
                  <Checkbox name="english" onChange={handleChange} />
                  <p className="select-none" htmlFor="english">
                    English
                  </p>
                </div>
                <div className=" flex gap-2">
                  <Checkbox name="türkçe" onChange={handleChange} />
                  <p className="select-none" htmlFor="türkçe">
                    Türkçe
                  </p>
                </div>
                <div className=" flex gap-2 ">
                  <Checkbox name="français" onChange={handleChange} />
                  <p className="select-none" htmlFor="français">
                    Français
                  </p>
                </div>
                <div className=" flex gap-2">
                  <Checkbox name="deutsch" onChange={handleChange} />
                  <p className="select-none" htmlFor="deutsch">
                    Deutsch
                  </p>
                </div>
                <div className=" flex gap-2">
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
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
