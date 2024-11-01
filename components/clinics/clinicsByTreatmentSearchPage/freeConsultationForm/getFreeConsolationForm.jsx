"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ButtonComponent from "@/globalElements/Button";
import CustomInput from "@/globalElements/input";
import CardComponent from "@/globalElements/Card";
import { MotionDiv } from "@/globalElements/motion";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters long.")
    .required("Name is required."),
  email: Yup.string()
    .email("Please provide a valid email address.")
    .required("Email is required."),
  phone: Yup.string()
  .required("Phone number is required")
  .min(10, "Phone number should be at least 10 digits"),
  description: Yup.string()
    .min(10, "Description must be at least 10 characters long.")
    .required("Description is required."),
  agreed: Yup.bool().oneOf(
    [true],
    "You must agree to the terms of use and privacy policy."
  ),
});

const GetFreeConsolationForm = () => {
  const [submitError, setSubmitError] = useState("");

  return (
    <MotionDiv
      className="!flex-1 !w-full"
      initial={{ x: "50px", opacity: 0 }}
      whileInView={{ x: "0", opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <CardComponent
        className={"!flex-1 !w-full !rounded-none !rounded-r-2xl !shadow"}
      >
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            description: "",
            agreed: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            // Simulate form submission
            setTimeout(() => {
              console.log("Form submitted:", values);
              setSubmitting(false);
            }, 500);
          }}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <Form className="space-y-4 p-5">
              <div className="space-y-1">
                <label htmlFor="name">Enter your name</label>
                <Field
                  as={CustomInput}
                  type="input"
                  name="name"
                  placeholder="Enter your name"
                  className="!w-full !h-[40px] !bg-white !py-3 !px-5 !border !rounded-md"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-600"
                />
              </div>

              {/* Phone input */}
              <div className="space-y-1">
                <label htmlFor="phone">Enter your phone number</label>
                <CustomInput
                  type="phone" // Use 'text' type for custom input
                  name="phone"
                  placeholder="Enter your phone number"
                  className="!custom-phone-input2"
                  value={values.phone} // Use the values from Formik
                  onChange={(e) => setFieldValue("phone", e)} // Update the field value
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-600"
                />
              </div>

              {/* Email input */}
              <div className="space-y-1">
                <label htmlFor="email">Enter your Email</label>
                <Field
                  as={CustomInput}
                  type="input"
                  name="email"
                  placeholder="Enter your Email"
                  className="!w-full !h-[40px] !bg-white py-3 !px-5 !border !rounded-md"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />
              </div>

              {/* Description input */}
              <div className="space-y-1">
                <label htmlFor="description">Enter your description</label>
                <Field
                  as={CustomInput}
                  type="textarea"
                  name="description"
                  placeholder="Short description"
                  className="!w-full !bg-white !py-3 !px-5 !border !rounded-md"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-600"
                />
              </div>

              {/* Agreement checkbox */}
              <div className="flex gap-2 items-center">
                <Field type="checkbox" name="agreed" className="h-12 w-12" />
                <div className="flex flex-col gap-1">
                  <label htmlFor="agree">
                    I agree to the Terms of use, Privacy policy, and receive
                    marketing letters that may be of interest.
                  </label>
                  <label htmlFor="agree">
                    This site is protected by reCAPTCHA and the Google Privacy
                    Policy and Terms of Service apply.
                  </label>
                </div>
              </div>
              <ErrorMessage
                name="agreed"
                component="div"
                className="text-red-600"
              />

              <div className="w-full flex justify-end">
                <ButtonComponent
                  className="!bg-primary !text-white !rounded-md !w-[50%] lg:w-fit"
                  type="submit"
                  containerClassName={"flex justify-end w-full"}
                  title={isSubmitting ? "Submitting..." : "Send Request"}
                  disabled={isSubmitting}
                />
              </div>
            </Form>
          )}
        </Formik>

        {/* Submission error message */}
        {submitError && (
          <p className="text-center text-red-600 text-xl">{submitError}</p>
        )}
      </CardComponent>
    </MotionDiv>
  );
};

export default GetFreeConsolationForm;
