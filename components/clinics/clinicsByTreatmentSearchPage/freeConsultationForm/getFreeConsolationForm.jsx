"use client";

import ButtonComponent from "@/globalElements/Button";
import CustomInput from "@/globalElements/input";
import { useState } from "react";
import CardComponent from "@/globalElements/Card";
import { MotionDiv } from "@/globalElements/motion";

const GetFreeConsolationForm = () => {
  const [form, setForm] = useState({
    phone: "",
    email: "",
    name: "",
    description: "",
    agreed: false,
    contactMethod: "email", // Default contact method is set to email
  });

  const [error, setError] = useState({
    errorContent: "",
    isError: false,
    name: "",
  });

  const handlePhoneChange = (value) => {
    setForm((prevForm) => ({ ...prevForm, phone: value }));

    if (error.isError && error.name == "email or phone") {
      const validationResult = validateForm();
      if (!validationResult.isError || validationResult.name !== error.name) {
        setError({ isError: false, errorContent: "", name: "" });
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error message if the current field passes the validation after change
    if (error.isError && error.name != "agree") {
      const validationResult = validateForm();
      if (!validationResult.isError || validationResult.name !== error.name) {
        setError({ isError: false, errorContent: "", name: "" });
      }
    }

    if (checked && error.name == "agree") {
      setError({ isError: false, errorContent: "", name: "" });
    }
  };

  const handleContactMethodChange = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      contactMethod: e.target.value, // Set the selected contact method
    }));
  };

  const validateForm = () => {
    const { phone, email, name, description, agreed, contactMethod } = form;

    if (name.trim().length < 3) {
      return {
        isError: true,
        errorContent: "Name must be at least 3 characters long.",
        name: "name",
      };
    }

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Simple regex for email validation

    const isPhoneValid = phone != undefined && phone?.trim().length >= 10; // Basic phone validation (assumes at least 10 digits)

    if (contactMethod === "email" && !isEmailValid) {
      return {
        isError: true,
        errorContent: "Please provide a valid email address.",
        name: "email",
      };
    }

    if (contactMethod === "phone" && !isPhoneValid) {
      return {
        isError: true,
        errorContent: "Please provide a valid phone number.",
        name: "phone",
      };
    }

    // Validate description (at least 10 characters)
    if (description.trim().length < 10) {
      return {
        isError: true,
        errorContent: "Description must be at least 10 characters long.",
        name: "description",
      };
    }

    if (!agreed) {
      return {
        isError: true,
        errorContent: "You must agree to the terms of use and privacy policy.",
        name: "agree",
      };
    }

    // If all validations pass
    return { isError: false, errorContent: "", name: "" };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Run validation before submitting
    const validationResult = validateForm();
    if (validationResult.isError) {
      setError(validationResult);
      return;
    }

    // Submit the form or perform any action here
    console.log("Form submitted", form);
  };

  return (
    <MotionDiv
      className="!flex-1 !w-full"
      initial={{
        x: "50px",
        opacity: 0,
      }}
      whileInView={{
        x: "0",
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
    >
      <CardComponent
        className={"!flex-1 !w-full !rounded-none !rounded-r-2xl !shadow "}
      >
        <form onSubmit={handleSubmit} className="space-y-4 p-5">
          <div className="space-y-1">
            <label htmlFor="name">Enter your name</label>

            <CustomInput
              type="input"
              name="name"
              onChange={handleInputChange}
              placeholder="Enter your name"
              value={form.name}
              className="!w-full !h-[40px] !bg-white !py-3 !px-5 !border !rounded-md"
            />
          </div>

          {/* Dropdown for selecting contact method */}
          <div className="space-y-1">
            <label htmlFor="contactMethod">Preferred Contact Method</label>
            <select
              name="contactMethod"
              value={form.contactMethod}
              onChange={handleContactMethodChange}
              className="!w-full !h-[40px] !bg-white !py-0 !px-5 !border !rounded-md"
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </div>

          {/* Conditionally render phone or email input based on the contact method */}
          {form.contactMethod === "phone" && (
            <div className="space-y-1">
              <label htmlFor="phone">Enter your phone number</label>

              <CustomInput
                type="phone"
                name="phone"
                onChange={handlePhoneChange}
                placeholder="Enter your phone number"
                value={form.phone}
                className=" !custom-phone-input2"
              />
            </div>
          )}

          {form.contactMethod === "email" && (
            <div className="space-y-1">
              <label htmlFor="email">Enter your Email</label>

              <CustomInput
                type="input"
                name="email"
                onChange={handleInputChange}
                placeholder="Enter your Email"
                value={form.email}
                className="!w-full !h-[40px] !bg-white py-3 !px-5 !border !rounded-md"
              />
            </div>
          )}

          <div className="space-y-1">
            <label htmlFor="description">Enter your description</label>

            <CustomInput
              type="textarea"
              name="description"
              onChange={handleInputChange}
              placeholder="Short description"
              value={form.description}
              className="!w-full !bg-white !py-3 !px-5 !border !rounded-md"
            />
          </div>

          <div className="flex gap-2 items-center">
            <input
              onChange={handleInputChange}
              name={"agreed"}
              type="checkbox"
              checked={form.agreed}
              className="h-12 w-12"
            />
            <div className="flex flex-col gap-1">
              <label htmlFor="agree">
                I agree to the Terms of use Privacy policy and receive marketing
                letters that may be of interest.
              </label>
              <label htmlFor="agree">
                This site is protected by re captcha and the Google Privacy
                Policy and Terms of Service apply.
              </label>
            </div>
          </div>

          <div className="w-full flex justify-end">
            <ButtonComponent
              className="!bg-primary !text-white !rounded-md !w-[50%] lg:w-fit"
              type="submit"
              containerClassName={"flex justify-end w-full"}
              title={"Send Request"}
            />
          </div>
        </form>

        {error.isError && (
          <p className="text-center text-red-600 text-xl">
            {error.errorContent}
          </p>
        )}
      </CardComponent>
    </MotionDiv>
  );
};

export default GetFreeConsolationForm;
