"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomInput from "@/globalElements/input";

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
    <div>
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
        {({ values, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit} className="space-y-4">
            {/* Custom Phone Input */}
            <div>
              <CustomInput
                css={true}
                name="phone"
                type={"phone"}
                defaultCountry="TR"
                placeholder="Enter phone number"
                international
                value={values.phone}
                onChange={(value) => setFieldValue("phone", value)}
                className="w-full h-[40px] bg-slate-100 py-3 px-5 focus:border-primary rounded-2xl"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-600"
              />
            </div>

            {/* Name Input */}
            <div>
              <Field
                name="name"
                placeholder="Enter your name"
                className="w-full h-[40px] bg-slate-100 py-3 px-5 focus:border-primary rounded-2xl"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-600"
              />
            </div>

            {/* Email Input */}
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full h-[40px] bg-slate-100 py-3 px-5 focus:border-primary rounded-2xl"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600"
              />
            </div>

            {/* Message Input */}
            <div>
              <Field
                as="textarea"
                name="message"
                placeholder="Enter your message"
                className="w-full bg-slate-100 py-3 px-5 focus:border-primary rounded-2xl"
                rows={5}
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-600"
              />
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="bg-primary text-white rounded-2xl w-[50%] lg:w-fit py-2 px-4"
              >
                Submit
              </button>
            </div>

            {/* Display confirmation message after form submission */}
            {submitted && (
              <p className="text-green-600 text-center mt-4">
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
