"use client";
import { Formik, Form } from "formik";
import ButtonComponent from "@/globalElements/Button";
import * as Yup from "yup";
import { Toggle } from "@/globalElements/toggle";
import { InputWithLabel } from "@/globalElements/inputWithLabel";
import { useEffect, useState } from "react";

export default function HealthForm() {
  const [initialValues, setInitialValues] = useState({
    privatePatientsWelcome: {
      isAvailable: false,
      description: "",
    },
    publicHealthInsurance: {
      isAvailable: false,
      description: "",
    },
    dentalPlansAccepted: {
      isAvailable: false,
      description: "",
    },
  });

  useEffect(() => {
    // Mock data - replace with actual API call later
    setInitialValues({
      privatePatientsWelcome: {
        isAvailable: true,
        description: "We welcome private patients",
      },
      publicHealthInsurance: {
        isAvailable: true,
        description: "All major public insurance accepted",
      },
      dentalPlansAccepted: {
        isAvailable: true,
        description: "Most dental plans are accepted",
      },
    });
  }, []);
  const validationSchema = Yup.object().shape({
    privatePatientsWelcome: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    publicHealthInsurance: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    dentalPlansAccepted: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
  });
  return (
    <div className="flex w-full py-8 px-3 font-inter flex-col gap-8 bg-white rounded-[32px] shadow-[0px_4px_6px_0px_rgba(199, 199, 199, 0.08)]">
      <h1 className="text-xl font-semibold">Health insurance</h1>
      <p className="text-sm">
        Please tick all the Insurances which you accept. Please tick no for any
        you do not accept. If you are unsure of a Insurance, you may tick
        neither and return to this list later.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted", values);
          setSubmitted(true);
          resetForm(); // Reset form after submission
        }}
      >
        {({
          values,
          touched,
          errors,
          setFieldValue,
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
                  <h3 className="font-medium">Private Patients Welcome</h3>
                  <Toggle
                    name="privatePatientsWelcome.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  label="Description"
                  disabled={!values.privatePatientsWelcome.isAvailable}
                  name="privatePatientsWelcome.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="placeholder:text-red-500"
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3 className="font-medium">Public Health Insurance</h3>
                  <Toggle
                    name="publicHealthInsurance.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  label="Description"
                  disabled={!values.publicHealthInsurance.isAvailable}
                  name="publicHealthInsurance.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3 className="font-medium">Dental Plans Accepted</h3>
                  <Toggle
                    name="dentalPlansAccepted.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  label="Description"
                  disabled={!values.dentalPlansAccepted.isAvailable}
                  name="dentalPlansAccepted.description"
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
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
