"use client";
import { Formik, Form } from "formik";
import ButtonComponent from "@/globalElements/Button";
import * as Yup from "yup";
import { Toggle } from "@/globalElements/toggle";
import { InputWithLabel } from "@/globalElements/inputWithLabel";
import { useEffect, useState } from "react";

export const TravelServicesForm = () => {
  const [initialValues, setInitialValues] = useState({
    internationalTravel: {
      isAvailable: false,
      description: "",
    },
    localTravel: {
      isAvailable: false,
      description: "",
    },
    localAccomodation: {
      isAvailable: false,
      description: "",
    },
  });
  const validationSchema = Yup.object().shape({
    internationalTravel: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    localTravel: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    localAccomodation: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
  });
  useEffect(() => {
    const data = {
      internationalTravel: {
        isAvailable: true,
        description: "Turkey, Germany, USA",
      },
      localTravel: {
        isAvailable: true,
        description: "All cities",
      },
      localAccomodation: {
        isAvailable: true,
        description: "Limo",
      },
    };
    setInitialValues(data);
  }, []);

  return (
    <div className="flex w-full py-8 px-3 font-inter flex-col gap-8 bg-white rounded-[32px] shadow-[0px_4px_6px_0px_rgba(199, 199, 199, 0.08)]">
      <h1 className="text-xl font-semibold">Travel services</h1>
      <p>
        This section is for clinics which regularly attract patients from other
        countries as part of their core service. (Medical tourism).
      </p>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted", values);
        }}
      >
        {({
          values,
          touched,
          errors,
          handleSubmit,
          handleBlur,
          handleChange,
        }) => {
          return (
            <Form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-8"
            >
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3>International travel</h3>
                  <Toggle
                    value={values.internationalTravel.isAvailable}
                    name="internationalTravel.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  value={values.internationalTravel.description}
                  label="Description"
                  disabled={!values.internationalTravel.isAvailable}
                  name="internationalTravel.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3>Local travel</h3>
                  <Toggle
                    value={values.localTravel.isAvailable}
                    name="localTravel.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  value={values.localTravel.description}
                  label="Description"
                  disabled={!values.localTravel.isAvailable}
                  name="localTravel.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3>Local accommodation</h3>
                  <Toggle
                    value={values.localAccomodation.isAvailable}
                    name="localAccomodation.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  value={values.localAccomodation.description}
                  label="Description"
                  disabled={!values.localAccomodation.isAvailable}
                  name="localAccomodation.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>

              {/* Submit Button */}
              <div className="w-full flex justify-end">
                <ButtonComponent
                  type="submit"
                  className="bg-primary !py-2 !px-4 text-white !rounded-lg !w-[174px] "
                >
                  <p className="text-sm">save</p>
                </ButtonComponent>
              </div>

              {/* Display confirmation message after form submission */}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
