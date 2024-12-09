"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ButtonComponent from "@/globalElements/Button";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .required("Phone number is required")
    .min(10, "Phone number should be at least 10 digits"),
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters long"),
});

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex w-full">
      <Formik
        initialValues={{
          phone: "",
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted", values);
          setSubmitted(true);
          resetForm(); // Reset form after submission
        }}
      >
        {({ values, touched, errors, setFieldValue, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="flex w-full gap-2 flex-col">
            {/* Custom Phone Input */}
            <div>
              {/*içiçe iki inputun sınırlarının çakışmaması için*/}
              <div
                className={` flex w-full h-fit flex-col rounded-2xl ${
                  touched.phone && errors.phone ? "border-red-600 border" : ""
                }`}
              >
                <Field
                  component={PhoneInput}
                  defaultCountry="TR"
                  placeholder="Enter phone number"
                  international
                  countryCallingCodeEditable
                  value={values.phone}
                  onChange={(value) => setFieldValue("phone", value)}
                  className={`home-Input custom-phone-input`}
                />
              </div>
              <div className="text-red-600 flex w-full mt-1 min-h-6">
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-600"
                />
              </div>
            </div>

            {/* Name Input */}
            <div>
              <Field
                name="name"
                placeholder="Enter your name"
                className={`home-Input ${
                  touched.name && errors.name ? "border-red-600 border" : ""
                }`}
              />
              <div className="text-red-600 flex w-full mt-1 min-h-6">
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-600"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className={`home-Input ${
                  touched.email && errors.email ? "border-red-600 border" : ""
                }`}
              />
              <div className="text-red-600 flex w-full mt-1 min-h-6">
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />
              </div>
            </div>

            {/* Message Input */}
            <div>
              <Field
                as="textarea"
                name="message"
                placeholder="Enter your message"
                className={`home-Input !min-h-[146px]  ${
                  touched.message && errors.message
                    ? "border-red-600 border"
                    : ""
                }`}
                rows={5}
              />
              <div className="text-red-600 flex w-full mt-1 min-h-6">
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-600"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-end">
              <ButtonComponent
                type="submit"
                className="bg-primary text-white !rounded-xl w-[50%] lg:w-fit px-20 md:px-8 md:py-4"
              >
                <p className=" md:text-xl">Submit</p>
              </ButtonComponent>
            </div>

            {/* Display confirmation message after form submission */}
            {submitted && (
              <p className="text-green-600 text-center mt-2">
                Form submitted successfully!
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
