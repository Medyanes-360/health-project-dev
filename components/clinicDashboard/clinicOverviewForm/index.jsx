"use client";
import { Formik, Form, Field } from "formik";
import ButtonComponent from "@/globalElements/Button";
import * as Yup from "yup";
import { Toggle } from "@/globalElements/toggle";
import { InputWithLabel } from "@/globalElements/inputWithLabel";
import { PhoneInputWithLabel } from "@/globalElements/PhoneInputWithLabel";

export const ClinicOverviewForm = () => {
  const validationSchema = Yup.object().shape({
    clinic: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    addressLineFirst: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    addressLineSecond: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    city: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    state: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    zipCode: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
    email: Yup.object().shape({
      isAvailable: Yup.boolean(),
      description: Yup.string(),
    }),
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
        initialValues={{
          parking: {
            isAvailable: false,
            description: "",
          },
          addressLineFirst: {
            isAvailable: false,
            description: "",
          },
          addressLineSecond: {
            isAvailable: false,
            description: "",
          },
          city: {
            isAvailable: false,
            description: "",
          },
          state: {
            isAvailable: false,
            description: "",
          },
          zipCode: {
            isAvailable: false,
            description: "",
          },
          email: {
            isAvailable: false,
            description: "",
          },
          phone: "",
          mobile:""
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
              className="flex w-full flex-col gap-8"
            >
              <div className="w-full flex gap-3 flex-col">
                <InputWithLabel
                  label="Clinic name"
                  name="clinic.description"
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
                  name="addressLineFirst.description"
                  placeholder="Address line 1"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between"></div>
                <InputWithLabel
                  label="Address line 2"
                  name="addressLineSecond.description"
                  placeholder="Address line 2"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between"></div>
                <InputWithLabel
                  label="City"
                  name="city.description"
                  placeholder="City"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between"></div>
                <InputWithLabel
                  label="State"
                  name="state.description"
                  placeholder="State"
                  error={errors.name}
                  touched={touched.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex gap-3 flex-col">
                <div className="w-full flex justify-between"></div>
                <InputWithLabel
                  label="Zip/postal code"
                  name="zipCode.description"
                  placeholder="Zip/postal code"
                  error={errors.name}
                  touched={touched.name}
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
                  name="email.description"
                  placeholder="Email"
                  error={errors.name}
                  touched={touched.name}
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
