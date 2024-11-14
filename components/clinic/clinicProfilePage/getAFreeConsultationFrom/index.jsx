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

export default function GetAFreeConsultationForm() {
  const [submitError, setSubmitError] = useState("");

  return (
    <MotionDiv
      className="!flex-1 !w-full h-full"
      initial={{ x: "50px", opacity: 0 }}
      whileInView={{ x: "0", opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <CardComponent
        className={
          "!flex-1 !w-full !rounded-none !rounded-r-2xl  sm:shadow shadow-none h-[650px] md:h-full "
        }
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
          {({ isSubmitting, values, setFieldValue, errors, touched }) => (
            <Form className="space-y-4 p-[0] md:p-5 text-[#061C3D] flex flex-col gap-4 !sm:mb-12 mb-0">
              {/* Phone input */}
              <div className="space-y-1 text-start">
                <label
                  htmlFor="phone"
                  className="font-lexend text-sm font-light leading-5 text-left text-[#061C3D]"
                >
                  Enter your phone number
                </label>
                <div className="space-y-1 h-[48px] ">
                  <Field
                    as={CustomInput}
                    type="input"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="!w-full !h-[40px] !bg-white !py-3 !px-5 !border !rounded-md"
                  />
                  {errors.phone && touched.phone && (
                    <div className="text-red-600 text-sm">{errors.phone}</div>
                  )}
                </div>
              </div>

              {/* Email input */}
              <div className="space-y-1 text-start">
                <label
                  htmlFor="email"
                  className="font-lexend text-sm font-light leading-5 text-left text-[#061C3D]"
                >
                  Enter your email
                </label>
                <div className="space-y-1 h-[48px]">
                  <Field
                    as={CustomInput}
                    type="input"
                    name="email"
                    placeholder="Enter your email"
                    className="!w-full !h-[40px] !bg-white py-3 !px-5 !border !rounded-md"
                  />
                  {errors.email && touched.email && (
                    <div className="text-red-600 text-sm">{errors.email}</div>
                  )}
                </div>
              </div>

              {/* Description input */}
              <div className="space-y-1 text-start">
                <label
                  htmlFor="description"
                  className="font-lexend text-sm font-light leading-5 text-left text-[#061C3D]"
                >
                  Enter your description
                </label>
                <div className="space-y-1 h-[48px]">
                  <Field
                    as={CustomInput}
                    type="input"
                    name="description"
                    placeholder="Short description"
                    className="!w-full !h-[40px] !bg-white !py-3 !px-5 !border !rounded-md"
                  />
                  {errors.description && touched.description && (
                    <div className="text-red-600 text-sm">
                      {errors.description}
                    </div>
                  )}
                </div>
              </div>

              {/* Agreement checkbox */}
              <div className="flex gap-2 items-start h-[70px] mb-[0] !md:mb-5  ">
                <Field type="checkbox" name="agreed" className="h-5 w-5" />
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="agree"
                    className="text-start text-sm font-poppins text-sm font-normal leading-5"
                  >
                    I agree to the Terms of use, Privacy policy, and receive
                    marketing letters that may be of interest.
                  </label>
                  <label
                    htmlFor="agree"
                    className="text-start text-sm font-poppins text-sm font-normal leading-5"
                  >
                    This site is protected by reCAPTCHA and the Google Privacy
                    Policy and Terms of Service apply.
                  </label>
                </div>
              </div>

              <div className="w-full flex justify-start fixed sm:bottom-[20px] bottom-[0px] flex-col gap-[0rem] text-start ">
                {errors.agreed && touched.agreed && (
                  <div className="text-red-600 text-sm w-[250px]    ">
                    {errors.agreed}
                  </div>
                )}
                <ButtonComponent
                  className="!bg-primary !text-white !rounded-md font-lexend text-[17px] font-medium leading-[56px] w-[216px] h-[56px] "
                  type="submit"
                  containerClassName={"flex justify-end w-full"}
                  title={isSubmitting ? "Submitting..." : "Mesaj Gönder"}
                  disabled={isSubmitting}
                />
              </div>
            </Form>
          )}
        </Formik>

        {/* Submission error message */}
        {submitError && (
          <p
            className="
  font-size: 0.875rem; /* Daha küçük font boyutu */
  color: #e63946; /* Hata mesajları için kırmızı renk */"
          >
            {submitError}
          </p>
        )}
      </CardComponent>
    </MotionDiv>
  );
}
