"use client";
import ButtonComponent from "@/globalElements/Button";
import CustomInput from "@/globalElements/input";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [error, setError] = useState({
    errorContent: "",
    isError: false,
    name: "",
  });

  const handlePhoneChange = (value) => {
    setForm((prevForm) => ({ ...prevForm, phone: value }));

    // Clear error if valid input is provided
    if (error.isError && error.name === "email or phone") {
      const validationResult = validateForm();
      if (!validationResult.isError || validationResult.name !== error.name) {
        setError({ isError: false, errorContent: "", name: "" });
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));

    // Clear error if valid input is provided
    if (error.isError) {
      const validationResult = validateForm();
      if (!validationResult.isError || validationResult.name !== error.name) {
        setError({ isError: false, errorContent: "", name: "" });
      }
    }
  };

  const validateForm = () => {
    const { phone, email, name, message } = form;

    // Simple regex for email validation
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Basic phone validation (at least 10 characters)
    const isPhoneValid = phone?.trim().length >= 10;

    // Check if either email or phone is valid
    if (!isEmailValid && !isPhoneValid) {
      return {
        isError: true,
        errorContent: "Please provide a valid email or phone number.",
        name: "email or phone",
      };
    }

    // Validate name (at least 3 characters)
    if (name?.trim().length < 3) {
      return {
        isError: true,
        errorContent: "Name must be at least 3 characters long.",
        name: "name",
      };
    }

    // Validate message (at least 10 characters)
    if (message?.trim().length < 10) {
      return {
        isError: true,
        errorContent: "Message must be at least 10 characters long.",
        name: "message",
      };
    }

    // All validations passed
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <CustomInput
        type="phone"
        name="phone"
        onChange={handlePhoneChange}
        placeholder="Enter your phone number"
        value={form.phone}
        css={true}
        className="!w-full !h-[40px] !bg-slate-100 !py-3 !px-5 !border-none !focus:border-primary !rounded-2xl"
      />
      <CustomInput
        type="input"
        name="name"
        onChange={handleInputChange}
        placeholder="Enter your name"
        value={form.name}
        className=""
      />
      <CustomInput
        type="input"
        name="email"
        onChange={handleInputChange}
        placeholder="Enter your email"
        value={form.email}
        className=""
      />
      <CustomInput
        type="textarea"
        name="message"
        onChange={handleInputChange}
        placeholder="Enter your message"
        value={form.message}
        className=""
      />
      <div className="w-full flex justify-end">
        <ButtonComponent
          className="!bg-primary !text-white !rounded-2xl !w-[50%] lg:w-fit"
          type="submit"
          title={"Submit"}
        />
      </div>
      {error.isError && (
        <p className="text-center text-red-600 text-xl">{error.errorContent}</p>
      )}
    </form>
  );
};

export default ContactForm;
