"use client";
import { Formik, Form } from "formik";
import ButtonComponent from "@/globalElements/Button";
import * as Yup from "yup";
import { Toggle } from "@/globalElements/toggle";
import { InputWithLabel } from "@/globalElements/inputWithLabel";
import RichTextEditor from "@/globalElements/richTextEditor";
import { useEffect, useState } from "react";

export const PaymentInformationForm = () => {
  const validationSchema = Yup.object().shape({
    parking: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    publicTransportAccess: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    accessWithoutSteps: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    accessableToDisabledPeople: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    disabledParking: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
  });
  const [value, setValue] = useState([
    {
      type: "paragaph",
      children: [{ text: "" }],
    },
  ]);
  return (
    <div className="flex w-full py-8 px-3 font-inter flex-col gap-8 bg-white rounded-[32px] shadow-[0px_4px_6px_0px_rgba(199, 199, 199, 0.08)]">
      <h1 className="text-xl font-semibold">Payment information</h1>
      <p>
        Please tick all the payment services which you offer. Please tick no for
        any you do not offer. If you are unsure of a service, you may tick
        neither and return to this list later.
      </p>
      <Formik
        initialValues={{
          parking: {
            isAvailable: false,
            description: "",
          },
          publicTransportAccess: {
            isAvailable: false,
            description: "",
          },
          accessWithoutSteps: {
            isAvailable: false,
            description: "",
          },
          accessableToDisabledPeople: {
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
          // Rich text editor valusunu manuel olarak form state'ine ekler
          useEffect(() => {
            setFieldValue("description", value);
          }, [value]);
          return (
            <Form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-8"
            >
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3>Discounts</h3>
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
                  <h3>Payment plans</h3>
                  <Toggle
                    name="accessableToDisabledPeople.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  label="Description"
                  disabled={!values.accessableToDisabledPeople.isAvailable}
                  name="accessableToDisabledPeople.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3>Free initial comsultation</h3>
                  <Toggle
                    name="publicTransportAccess.isAvailable"
                    onChange={handleChange}
                  />
                </div>
                <InputWithLabel
                  label="Description"
                  disabled={!values.publicTransportAccess.isAvailable}
                  name="publicTransportAccess.description"
                  placeholder="Description"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3>Cheques</h3>
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
                  <h3>Credit cards</h3>
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
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between">
                  <h3>Payment description</h3>
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
              <div className="w-full flex gap-3 flex-col">
                <RichTextEditor
                  name="description"
                  placeholder="Please enter any other information about payment methods, credit or offers that would be important for prospective patients"
                  value={value}
                  setValue={setValue}
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
