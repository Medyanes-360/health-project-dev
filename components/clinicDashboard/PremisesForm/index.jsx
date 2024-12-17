"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ButtonComponent from "@/globalElements/Button";
import * as Yup from "yup";
import { Toggle } from "@/globalElements/toggle";
import { InputWithLabel } from "@/globalElements/inputWithLabel";

export const PremisesForm = () => {
  const validationSchema = Yup.object().shape({
    parking: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    publicTransport: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    accessWithoutSteps: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    disabledAccess: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    disabledParking: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
  });

  return (
    <div className="flex w-full">
      <Formik
        initialValues={{
          parking: {
            isAvailable: false,
            description: "",
          },
          publicTransport: {
            isAvailable: false,
            description: "",
          },
          accessWithoutSteps: {
            isAvailable: false,
            description: "",
          },
          disabledAccess: {
            isAvailable: false,
            description: "",
          },
          disabledParking: {
            isAvailable: false,
            description: "",
          },
        }}
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
              className="flex w-full gap-2 flex-col px-10"
            >
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3>Parking</h3>
                  <Toggle name="parking.isAvailable" onChange={handleChange} />
                </div>
                <InputWithLabel
                  label="Description"
                  disabled={!values.parking.isAvailable}
                  name="parking.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3>Accessible to disabled people</h3>
                  <Toggle
                    name="disabledAccess.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  label="Description"
                  disabled={!values.disabledAccess.isAvailable}
                  name="disabledAccess.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3>Public transport access</h3>
                  <Toggle
                    name="publicTransport.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  label="Description"
                  disabled={!values.publicTransport.isAvailable}
                  name="publicTransport.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3>Access without access</h3>
                  <Toggle
                    name="accessWithoutSteps.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  label="Description"
                  disabled={!values.accessWithoutSteps.isAvailable}
                  name="accessWithoutSteps.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3>Disabled parking</h3>
                  <Toggle
                    name="disabledParking.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  label="Description"
                  disabled={!values.disabledParking.isAvailable}
                  name="disabledParking.description"
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
                  className="bg-primary !py-2 text-white !rounded-xl w-[174px] "
                >
                  <p className="text-sm">Submit</p>
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
