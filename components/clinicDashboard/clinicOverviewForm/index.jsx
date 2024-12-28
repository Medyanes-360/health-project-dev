"use client";

import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import ButtonComponent from "@/globalElements/Button";
import * as Yup from "yup";
import { InputWithLabel } from "@/globalElements/inputWithLabel";
import { PhoneInputWithLabel } from "@/globalElements/PhoneInputWithLabel";

export const ClinicOverviewForm = () => {
  const [initialValues, setInitialValues] = useState({
    clinic: "",
    addressLineFirst: "",
    addressLineSecond: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    phone: "",
    mobile: "",
  });

  useEffect(() => {
    setInitialValues({
      clinic: "Medyanes 360",
      addressLineFirst: "123 Wellness Blvd",
      addressLineSecond: "Suite 400",
      city: "Health City",
      state: "Healthy State",
      zipCode: "12345",
      email: "contact@happyhealth.com",
      phone: "555-1234",
      mobile: "555-5678",
    });
  }, []);

  const validationSchema = Yup.object().shape({
    clinic: Yup.string().required("required"),
    addressLineFirst: Yup.string().required("required"),
    addressLineSecond: Yup.string().required("required"),
    city: Yup.string().required("required"),
    state: Yup.string().required("required"),
    zipCode: Yup.string().required("required"),
    email: Yup.string()
      .email("Invalid email adress")
      .required("Email is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^\+[1-9]\d{1,14}$/, "Invalid phone number"),
    mobile: Yup.string()
      .required("Phone number is required")
      .matches(/^\+[1-9]\d{1,14}$/, "Invalid phone number"),
  });

  return (
    <div className="flex w-full py-8 px-3 font-inter flex-col gap-8 bg-white rounded-[32px] shadow-[0px_4px_6px_0px_rgba(199, 199, 199, 0.08)]">
      <h1 className="text-xl font-semibold">Clinic overview</h1>
      <p>Preview my changes (remember to save first!)</p>

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
                <InputWithLabel
                  label="Clinic name"
                  name="clinic"
                  placeholder="Clinic name"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between"></div>
                <InputWithLabel
                  label="Address line 1"
                  name="addressLineFirst"
                  placeholder="Address line 1"
                  error={errors.addressLineFirst}
                  touched={touched.addressLineFirst}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between"></div>
                <InputWithLabel
                  label="Address line 2"
                  name="addressLineSecond"
                  placeholder="Address line 2"
                  error={errors.addressLineSecond}
                  touched={touched.addressLineSecond}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between"></div>
                <InputWithLabel
                  label="City"
                  name="city"
                  placeholder="City"
                  error={errors.city}
                  touched={touched.city}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between"></div>
                <InputWithLabel
                  label="State"
                  name="state"
                  placeholder="State"
                  error={errors.state}
                  touched={touched.state}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between"></div>
                <InputWithLabel
                  label="Zip/postal code"
                  name="zipCode"
                  placeholder="Zip/postal code"
                  error={errors.zipCode}
                  touched={touched.zipCode}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <Field
                  className={`home-Input custom-phone-input`}
                  component={PhoneInputWithLabel}
                  name="phone"
                  label="Phone"
                  error={errors.phone}
                  touched={touched.phone}
                  defaultCountry="TR"
                  placeholder="Enter phone number"
                  international
                  countryCallingCodeEditable
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between"></div>
                <InputWithLabel
                  label="Email"
                  name="email"
                  placeholder="Email"
                  error={errors.email}
                  touched={touched.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <Field
                  className={`home-Input custom-phone-input`}
                  component={PhoneInputWithLabel}
                  name="mobile"
                  label="mobile"
                  error={errors.phone}
                  touched={touched.phone}
                  defaultCountry="TR"
                  placeholder="Enter phone number"
                  international
                  countryCallingCodeEditable
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
